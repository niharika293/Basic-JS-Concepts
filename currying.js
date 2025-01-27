/**
 * Function currying is a functional programming technique where a function with multiple arguments
 * is transformed into a series of functions, each taking a single argument. 
 * Not necessary single argument can be one or more. 
 * Instead of calling the function with all arguments at once, you call a sequence of functions, 
 * each accepting one / more arguments and returning another function until all arguments are provided.
 * Syntax :
    The curried function returns a new function for each argument until all arguments are supplied.
 */

// examples

// Without currying 

function multiply(x, y){
    return console.log(x*y);
}

multiply(3,4);

// with currying 

// USig closures 

/**
 * What Are Closures in JavaScript?
 * A closure in JavaScript is a feature where an inner function has access to the variables 
 * and functions of its outer function, even after the outer function has finished executing. 
 * Closures allow functions to "remember" the environment in which they were created.
 * How Closures Work
 *  ->  A closure has access to:
    -  Its own scope (variables declared within the function).
    - The scope of its outer function (variables declared in the parent function).
    - The global scope (variables declared globally).
* Key Characteristics of Closures
    -> Functions Remember Their Environment: A closure can "close over" the variables of its parent, 
   preserving them in memory.

    -> Variables Are Not Copied: Variables in closures are not copied; they are shared. 
    If the variable changes, the closure reflects the updated value.

    -> Closures Keep Variables Alive: If an outer function’s variables are referenced in an inner 
    function, they are not garbage-collected as long as the closure exists.

 * 
 */

// Example of closure : 

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer Variable: ${outerVariable}`);
      console.log(`Inner Variable: ${innerVariable}`);
    };
  }
  
const newFunction = outerFunction("outside");
newFunction("inside");


function multiplly(x){
    return function(y){
        return function(z){
            console.log(x*y*z);
        }
    }
}

// usage 

multiplly(3)(4)(5); 

// multiplly(3) returns a () that expects y.
// multiplly(3)(4) returns a () that expects z.
// multiplly(3)(4)(5) computes the sum & returns the result.

const multiplyBy2 = multiplly(2);
const multitplyFinal = multiplyBy2(5);
multitplyFinal(3);


// Using .bind

/**
 * Why Can't We Omit null or this?
 * The .bind() method requires a value for the this argument as its first parameter. 
 * Even if the function does not use this, JavaScript does not allow you to omit this argument.
 * If you don’t need to bind this, you must still provide a value (e.g., null, undefined,
 *  or any arbitrary value):
 * Using .bind() ensures that your function behaves predictably in any context, especially 
 * for object methods or when passing functions as callbacks.
 */

let multiplyBy2Bind = multiply.bind(this,2); // Partially applies 2 as the first argument
multiplyBy2Bind(3);

let multiplyBy3Bind = multiply.bind(this, 3);
multiplyBy3Bind(5);

// Using an ES6 Arrow Function:

const multiplyArrow = x => y => x*y;
const multiplyBy4 = multiplyArrow(4);
console.log(multiplyBy4(5));