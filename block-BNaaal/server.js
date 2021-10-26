// var http = require('http');

// http.createServer((request,response) =>{
// console.log(request,response);
// response.end('Welcome');
// }).listen(4000,'localhost');

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(request,response){
    response.end('welcome')
}
server.listen (4000 , () =>{
 console.log('server is listning on port');
});