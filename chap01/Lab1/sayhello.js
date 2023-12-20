const http = require("http");
const url = require("url");

http.createServer(function(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  const q = url.parse(req.url, true).query;
  const text = q.name + " " + q.text;
  
  res.end(text);
}).listen(8081);
console.log(`Server SayHello is running at http://127.0.0.1:8081/`);
