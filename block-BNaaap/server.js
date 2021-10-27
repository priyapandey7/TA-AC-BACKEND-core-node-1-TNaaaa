var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req , res) {
    console.log(req.method);
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('<h1>Welcome</h1>');
}

server.listen(4444,()=>{
    console.log('Server listing on port 4444 ');
})