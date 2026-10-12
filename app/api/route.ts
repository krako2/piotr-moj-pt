import { env } from "cloudflare:workers";
import * as z from "zod";

const ZodForm = z.object({
  name: z.string().nonempty().max(100),
  preferredContactMethod: z.string().nonempty().max(10),
  preferredContact: z.string().nonempty().max(100),
  experience: z.string().nonempty().max(100),
  goal: z.string().nonempty().max(1000),
  biggestStruggle: z.string().nonempty().max(1000),
  willingToInvest: z.string().nonempty().max(100),
});

export async function POST(request: Request) {
  const data: unknown = await request.json();
  const result = ZodForm.safeParse(data);
  
  if (result.success) {
    await env.EMAIL.send({
		  to: `${env.OWNER_EMAIL}`,
			from: { email: `${env.SERVICE_EMAIL}`, name: "Piotr's Email Bot" },
			subject: "New Form Submission",
			html: `
        <h1>Someone just submitted a response to the consultation form!</h1>
        <p><strong>Name:</strong> ${result.data.name}</p>
        <p><strong>Preferred contact (${result.data.preferredContactMethod}):</strong> ${result.data.preferredContact}</p>
        <p><strong>Experience level:</strong> ${result.data.experience}</p>
        <p><strong>Main goal:</strong> ${result.data.goal}</p>
        <p><strong>Biggest struggle:</strong> ${result.data.biggestStruggle}</p>
        <p><strong>Willing to invest?</strong> ${result.data.willingToInvest}</p>
      `,
			text: `
        Someone just submitted a response to the consultation form!
        Name: ${result.data.name}
        Preferred contact: ${result.data.preferredContactMethod} - ${result.data.preferredContact}
        Experience level: ${result.data.experience}
        Main goal: ${result.data.goal}
        Biggest struggle: ${result.data.biggestStruggle}
        Willing to invest: ${result.data.willingToInvest}
      `,
    });

    return new Response(null, {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(null, {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}
