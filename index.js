var fs = require("fs"); // zaimportowanie modułu "fs"
var http = require("http"); // zaimportowanie modułu "http"
var server = http.createServer(); // użycie metody createServer

server.on("request", function(request, response) {
  response.setHeader("Content-type", "text/html; charset=utf-8");
  
  if (request.method === "GET" && request.url === "/") {
    fs.readFile("index.html", "utf-8", function(err, data) {
      if (err) throw err;
      response.write(data);
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.write('<img src="https://img.freepik.com/darmowe-wektory/404-projekt-b%C5%82%C4%99du-z-robotami-drogowymi_23-2147735305.jpg?size=338&ext=jpg" alt="404">');
    response.end();
  }
});

server.listen(8080);