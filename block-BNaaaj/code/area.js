function square(a){
    return a * a;
}
let rectangle  = function (length, breadth) {
    let a = length * breadth;
    console.log('Area of the rectangle is ' + a + ' square unit');
}

function circle(r){
    return 2 * 3.14 * r;
} 

module.exports = {
    square : square,
    rectangle:rectangle,
    circle:circle
}