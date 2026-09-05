export async function POST(request: Request) {
  console.log(request.formData);

  return new Response(JSON.stringify(request), {
    status: 201,
    headers: { "Content-Type": "application/json" }
  });
}
