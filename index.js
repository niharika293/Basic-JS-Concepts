console.log("hello world!");
console.log("accessing var",a);
var a  = 10;
console.log("a after initialising",a);
// console.log("acessing let", x);
let x = 19;

var namee = "test";
console.log("acessing let", x);

// var x = 19;


// console.log("accessiing constt", y);
const y = 70;

// y = 900;
console.log('accessing consstt ', y);

// const z ;
// z = 89;

calculateDiameter(18);

function calculateDiameter(radius){
    console.log("inside method :: ", radius);
    return 2*radius;
}

// calculateDiameter = (radius) => 2*radius; 

// calculateDiameter = function(radius){
//     console.log("inside method :: ", radius);
//     return 2*radius;
// }

a = 19;

console.log("a after", a);

calculateDiameter(10);