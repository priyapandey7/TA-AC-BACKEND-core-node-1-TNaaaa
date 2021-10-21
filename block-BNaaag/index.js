// File System Use
let fs = require('fs');
fs.readFile('./content.md', (err, content) => {
  console.log(content.toString());
});  
// This code will run Asynchronously.


// Buffer
let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');
console.log(buff1.toString());
