var http = require('http');

var fs = require('fs');
var server = http.createServer(handleRequest);

function handleRequest(req,res){
    if (res.method ==='GET' && req.url ==='/file'){
        fs.readFile('./node.html',(err,content)=>{
            if(err) console.log(err);
            res.setHeader('content-Type','text/html');
            res.end(content);
        })
    }
    if(res.method ==='GET' && req.url ==='/stream'){
        res.setHeader('content-Type','text/html');
        fs.createReadStream('./node.html').pipe(res);
    }
}

server.listen(5555,() =>{
    console.log('server is listning on port 5555');
})

