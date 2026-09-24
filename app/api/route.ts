import { env } from "cloudflare:workers";

export async function POST(request: Request) {
  console.log(request.formData);

  return new Response(JSON.stringify(request), {
    status: 202,
    headers: { "Content-Type": "application/json" }
  });
}
