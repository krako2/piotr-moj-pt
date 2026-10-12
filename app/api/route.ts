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
        <h2>Name</h2>
        <p>${result.data.name}</p>
        <h2>Preferred contact (${result.data.preferredContactMethod})</h2>
        <p>${result.data.preferredContact}</p>
        <h2>Experience level</h2>
        <p>${result.data.experience}</p>
        <h2>Main goal</h2>
        <p>${result.data.goal}</p>
        <h2>Biggest struggle</h2>
        <p>${result.data.biggestStruggle}</p>
        <h2>Willing to invest?</h2>
        <p>${result.data.willingToInvest}</p>
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
