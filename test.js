// console.log(x);
// let  x = 19;

// console.log(c);
// const c = 90;

var a = 10;
console.log(namee); 
// to be demoed -- Hoisting 
var namee = "test";
console.log(namee);
console.log(1);

// calculateDiameter(15);
// console.log(calculateDiameter(15)); // reference error

// function calculateDiameter(radius){
//     console.log("Inside Method :: diameter , result => ", 2*radius);
//     return 2*radius;
// }

// calculateDiameter = (radius) => 2*radius;
calculateDiameter = function(radius){
    console.log("Inside Method :: diameter , result => ", 2*radius);
    return 2*radius;
}

calculateDiameter(5);

function a(){
    var a2  = 10;
    console.log("inside a", a);
}

function b(){
    var b = 15;
    console.log("inside b", b);
}

console.log("accessing a from global", a2);
