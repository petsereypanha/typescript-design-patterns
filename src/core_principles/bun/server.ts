const server = Bun.serve({
    port: 3000,
    fetch(request) {
        return new Response("Hello from Bun!",{status: 200, headers: { "Content-Type": "text/plain" }});
    },
})

console.log(`Deno server listening on http://localhost:${server.port}`);