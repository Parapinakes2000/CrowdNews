/* I'll try to write this in Node.js. This is the first time I saw this language. */
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.creatServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log("Server running at http://${hostname}:${port}/");
});
