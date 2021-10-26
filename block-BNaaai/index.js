var urlString = "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male"

var url = require("url");
var parsedurl = url.parse('https://blog.altcampus.io:80/students/register?name=altcampus&gender=male',true)
console.log(parsedurl);

console.log( parsedUrl.pathname);
console.log(parsedUrl.query);

console.log(parsedUrl.host);
console.log(parsedUrl.protocol);

