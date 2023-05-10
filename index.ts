import http from "http";

const server = http.createServer();

server.on("connection", () => {
  console.log("Connection established");
});

server.listen(2323, () => {
  console.log("");
  console.log("Server is live using http channel");
});
