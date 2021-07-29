const http = require("http")
const fs = require('fs');
const {assert, error, info, warn, debug, log} = console

const options = {
  // key: fs.readFileSync('key.pem'),
  // cert: fs.readFileSync('cert.pem')
};
{
  "send"
}
http.createServer(options, function (req, res) {
  switch (req.url) {
    case null:
      res.writeHead(200);
      res.end("null");
    case "/send":
      res.writeHead(200);
      res.end("sending message\n");
      req.
    default:
      res.writeHead(200);
      res.end("hello world\n");
  }
  log(req.url)
}).listen(8000);