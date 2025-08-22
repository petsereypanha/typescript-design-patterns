const port =  4000;

const handler = async (req: Request) => {
  const body = "Hello from Deno!";
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" }
  });
};
Deno.serve({ port }, handler);
console.log(`Deno server listening on http://localhost:${port}`);