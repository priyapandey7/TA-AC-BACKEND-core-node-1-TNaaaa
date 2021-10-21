// sync
function second() {
    console.log('This is second function!');
  }
  function first() {
    console.log('First!');
    second();
    console.log('Last!');
  }
  first();

 // First!
//This is second function!
// Last!


// async
console.log('1')

setTimeout(function afterTwoSeconds() {
  console.log('2')
}, 2000)

console.log('3')
//1
//3
//2

//Q2
const networkRequest = () => {
    setTimeout(() => {
      console.log('Async Code');
    }, 10000);
  };
  console.log('Hello World');
  networkRequest();
  console.log('The End');

//Q3
  console.log('First');
setTimeout(()=> console.log('This is second function'),1000);
console.log('last');
// First
// last
// This is second function