
const http = require('http');
const fs = require('fs');
const url = require('url');

let server = http.createServer(handleRequest);

function handleRequest(req, res) {
  let parsedUrl = url.parse(req.url,true);
  let pathname = parsedUrl.pathname;
  if (req.method === 'GET' && pathname === '/') {
    fs.createReadStream('./index.html').pipe(res);
  }  else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    fs.readFile(__dirname + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else if (['jpeg', 'jpg', 'png', 'gif'].includes(req.url.split('.').pop())) {
    // set header for css file
    res.setHeader('Content-Type', 'text/image*');
    // read css file and send it in response
    fs.readFile(__dirname + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  }
}

server.listen(8888, 'localhost', () => {
  console.log('Server listning to port 8888!');
});