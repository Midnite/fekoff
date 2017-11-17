console.log("FEK OFF!");

const http = require("http")

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Fek Off!!!!!!!!');
}).listen(1337, '127.0.0.1');

console.log('Feking on at http://127.0.0.1:1337/');