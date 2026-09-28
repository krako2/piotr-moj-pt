import { env } from "cloudflare:workers";
import * as z from "zod";

const ZodForm = z.object({
  name: z.string(),
  preferredContactMethod: z.string(),
  preferredContact: z.string(),
  experience: z.string(),
  goal: z.string(),
  biggestStruggle: z.string(),
  willingToInvest: z.string(),
});

export async function POST(request: Request) {
  const formData: Object = JSON.parse(await request.text());

  return new Response(JSON.stringify(request), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
