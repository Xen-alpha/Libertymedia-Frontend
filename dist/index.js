import http from "http";
import fs from "fs";
const port = 8080;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("./dist/index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: File not found");
    } else {
      res.write(data);
    }
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("An error has occured", error);
  } else {
    console.log("Server is running on port " + port);
  }
});
