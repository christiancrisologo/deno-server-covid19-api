import { listenAndServe } from "http/server.ts";

export default () =>
  listenAndServe({ port: 8000 }, async (req) => {
    if (req.method === "GET" && req.url === "/") {
      req.respond({
        status: 200,
        headers: new Headers({
          "content-type": "text/html",
        }),
        body: await Deno.open("client/index.html"),
      });
    }
  });
