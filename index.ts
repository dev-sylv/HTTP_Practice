import http, { ServerResponse } from "http";

const server = http.createServer(
  (req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage>) => {
    res.writeHead();
    res.write("Hello sylvia, don't be sad");
    res.end();
  }
);

server.on("connection", () => {
  console.log("Connection established");
});

server.listen(2323, () => {
  console.log("");
  console.log("Server is live using http channel");
});
