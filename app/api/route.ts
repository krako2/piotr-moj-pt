import { env } from "cloudflare:workers";
import * as z from "zod";

const ZodForm = z.object({
  name: z.string().nonempty().max(100),
  preferredContactMethod: z.string().nonempty().max(10),
  preferredContact: z.string().nonempty().max(100),
  experienceMethod: z.string().max(0), // Honeypot
  experience: z.string().nonempty().max(100),
  goal: z.string().nonempty().max(1000),
  biggestStruggle: z.string().nonempty().max(1000),
  willingToInvest: z.string().nonempty().max(100),
  token: z.string().nonempty(),
});

export async function POST(request: Request) {
  const data: unknown = await request.json();
  const zodResult = ZodForm.safeParse(data);
  
  if (!zodResult.success) {
    return new Response("Submission failed. Maybe one of your responses was too long.", {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const expectedHostnames = new Set((env.TURNSTILE_HOSTNAMES ?? "")
    .split(",")
    .map((hostname: string) => hostname.trim())
    .filter(Boolean),
  );

  const token: string = zodResult.data.token;
  if (typeof token !== "string" || token.length === 0 || token.length > 2048 || expectedHostnames.size === 0) {
    return new Response("Stop messing with the token, asshole.", {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const turnstileResponse = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    signal: AbortSignal.timeout(10_000),
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP") ?? "",
    }),
  });

  if (!turnstileResponse.ok) {
    return new Response("Couldn't verify your request. Maybe you're a bot or Cloudflare Turnstile failed.", {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const turnstileResponseJSON: Response = await turnstileResponse.json();

  // @ts-ignore
  // 'hostname' is just a property on the JSON object returned by the Turnstile server
  if (!expectedHostnames.has(turnstileResponseJSON.hostname)) {
    return new Response("Keep going, see what you can find.", {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  await env.EMAIL.send({
    to: `${env.OWNER_EMAIL}`,
    from: { email: `${env.SERVICE_EMAIL}`, name: "Piotr's Email Bot" },
    subject: "New Form Submission",
    html: `
      <h1>You might have a client!</h1>
      <p><strong>Name:</strong> ${zodResult.data.name}</p>
      <p><strong>Preferred contact (${zodResult.data.preferredContactMethod}):</strong> ${zodResult.data.preferredContact}</p>
      <p><strong>Experience level:</strong> ${zodResult.data.experience}</p>
      <p><strong>Main goal:</strong> ${zodResult.data.goal}</p>
      <p><strong>Biggest struggle:</strong> ${zodResult.data.biggestStruggle}</p>
      <p><strong>Willing to invest?</strong> ${zodResult.data.willingToInvest}</p>
    `,
    text: `
      You might have a client!
      Name: ${zodResult.data.name}
      Preferred contact (${zodResult.data.preferredContactMethod}): ${zodResult.data.preferredContact}
      Experience level: ${zodResult.data.experience}
      Main goal: ${zodResult.data.goal}
      Biggest struggle: ${zodResult.data.biggestStruggle}
      Willing to invest: ${zodResult.data.willingToInvest}
    `,
  });

  return new Response("Success! Expect a response soon.", {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
