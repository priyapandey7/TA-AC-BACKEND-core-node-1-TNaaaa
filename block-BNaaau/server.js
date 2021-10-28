// Q1

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req,res) {
console.log(req,res);
}
server.listen(5000);


// Q2

var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
 res.end('My first server in NodeJS');
}
 server.listen(5100);

// Q3
var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
     console.log(req.headers);
     res.end(req.headers['user-agent']);
}
 server.listen(5555);

// Q4

var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
     console.log(req.method, req.url);
     res.end(req.method);
     res.end(req.url);
}
 server.listen(5566);

// Q5

var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
     res.end(JSON.stringify(req.headers));
     
}
 server.listen(7000, ()=>{
     console.log('Server listing on port 7000');
 });

// Q6

var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
    res.statusCode = 202;
     res.end(JSON.stringify(req.headers));
}
 server.listen(3333, ()=>{
     console.log('Server listing on port 3333');
 });

// Q7

var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
    res.setHeader('content-Type', 'text/html')
     res.end('<h3>Welcome to altcampus</h3>');
}
 server.listen(8000, ()=>{
     console.log('Server listing on port 8000');
 });

// Q8
var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
    res.writeHead(201,{'content-Type': 'text/html'})
     res.end('<h3>Welcome to altcampus</h3>');
}
 server.listen(8000, ()=>{
     console.log('Server listing on port 8000');
 });

// Q9
var http = require('http');

var server = http.createServer(handleRequest);

 function handleRequest(req,res) {
    res.writeHead(201,{'content-Type': 'application/json'})
     res.end('<h3>Welcome to altcampus</h3>');
}
 server.listen(8888, ()=>{
     console.log('Server listing on port 8888');
 });