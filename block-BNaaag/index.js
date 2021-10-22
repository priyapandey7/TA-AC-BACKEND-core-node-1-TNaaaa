// File System Use
// let fs = require('fs');
// fs.readFile('./content.md', (err, content) => {
//   console.log(content.toString());
// });  
// This code will run Asynchronously.


// 
var { readFile,readFileSync } = require('fs');
readFile('./content.md','utf8',(err , content) => {
  console.log(content);
});

var result =  readFileSync ('./content.md','utf8')
  console.log(result);


// Buffer
let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());

