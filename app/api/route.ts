export async function POST(request: Request) {
  return new Response(JSON.stringify(request), {
    status: 201,
    headers: { "Content-Type": "application/json" }
  });
}
