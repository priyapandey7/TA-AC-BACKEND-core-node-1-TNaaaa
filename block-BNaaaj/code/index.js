console.log('Welcome to Nodejs')

var os = require('os');
// const { uptime } = require('process');
var freeM = os.freemem();
var cpus = os.cpus().length;
var upTime = os.uptime();

console.log(freeM,cpus,upTime);

var { readFile,unlink } = require('fs');

var bufferA = Buffer.alloc(12);
var bufferB =  Buffer.allocUnsafe(12);

bufferA.write('Hello Priya');
console.log(bufferA.toString());

var { readFile,readFileSync ,unlink } = require('fs');

var sync = readFileSync("./app.js");

