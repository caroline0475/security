const server = Bun.serve({
  port: 3700,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname;

    // API: load/save progress
    if (path === "/api/progress" && req.method === "GET") {
      try {
        const data = await Bun.file("./data/progress.json").text();
        return new Response(data, { headers: { "Content-Type": "application/json" } });
      } catch {
        return new Response("{}", { headers: { "Content-Type": "application/json" } });
      }
    }

    if (path === "/api/progress" && req.method === "POST") {
      const body = await req.text();
      await Bun.write("./data/progress.json", body);
      return new Response('{"ok":true}', { headers: { "Content-Type": "application/json" } });
    }

    // API: load/save notes
    if (path === "/api/notes" && req.method === "GET") {
      try {
        const data = await Bun.file("./data/notes.json").text();
        return new Response(data, { headers: { "Content-Type": "application/json" } });
      } catch {
        return new Response("{}", { headers: { "Content-Type": "application/json" } });
      }
    }

    if (path === "/api/notes" && req.method === "POST") {
      const body = await req.text();
      await Bun.write("./data/notes.json", body);
      return new Response('{"ok":true}', { headers: { "Content-Type": "application/json" } });
    }

    // Serve static files
    if (path === "/") path = "/index.html";

    const filePath = `./public${path}`;
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Security+ Review App running at http://localhost:${server.port}`);
