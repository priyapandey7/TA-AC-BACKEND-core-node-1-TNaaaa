var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req , res) {
 if(req.method === 'GET' && req.url === '/'){
     res.setHeader('Content-Type', 'text/html');
     res.end('Welcome to homepage');

 } else if(req.method === 'GET' && req.url === '/about'){
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>this is all about NodeJS</h2>')
 } 
}

server.listen(5000,()=>{
    console.log('Server listing on port 5000 ');
})