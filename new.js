const add = a => b => a + b;
 
const multiply = a => b => a * b;
 
const addTen = add(10);
 
const mulFive = multiply(5);
 
function square(n) {return n * n;}

function factorial(n) {
    if(n===0) return 1;
    return n * factorial(n-1);
}
 
function compose(...args){
    console.log([...args]);
    return function(num){
        [...args].reverse().forEach((fn) => {
            num = fn(num);
        });
        return num;    
    }
}

console.log(compose(addTen, mulFive, factorial)(3)); // 40
 
console.log(compose(square, addTen)(4)); // 196

// compose(3,4,5);