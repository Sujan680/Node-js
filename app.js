// Using the http module to create a server and serve different pages based on the URL
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("The about page");
  } else if (req.url === "/contact") {
    res.end("The contact page");
  } else if (req.url === "/services") {
    res.end("The services page");
  } else {
    res.end("The home page");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
