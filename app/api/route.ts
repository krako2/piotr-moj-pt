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
  const formData: Object = await request.json();

  const zodResult = ZodForm.safeParse(formData);
  
  if (zodResult.success) {
    return new Response("Success! Expect a response soon.", {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Submission failed. Maybe one of your responses was too long.", {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}
