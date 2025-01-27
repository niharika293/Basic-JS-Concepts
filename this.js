// this - refers to the object i.e currently executing the code. WBehaves differently for different conditions. 

// 1. This in Global space

"use strict";

console.log(this); // refers to GLOBAL OBJECT which is diff for diff environments.

// 2. this inside a function

function x(){
    console.log("Inside function", this);
}

// It also depends upon how the () is being called. 
x(); // If called without any reference, returns undefined in strict mode, GLOBAL OBJECT in non strict mode. 

window.x(); // returns globalObject / CALLING OBJECT even in STRICT mode.

// 3. this inside an OBject 

const obj = {
    a : 10,
    x : function(){
        console.log("inside object's method", this);
        console.log(this.a); // 10 as this belongs to obj here.
    }
};

obj.x(); // represents the Object it belongs to i.e. obj 

// value of this can be modified by using CALL, APPLY , BIND methods that help in function borrowing.
//  they override the value of this
const student = {
    name : 'Niharika',
    printName : function(){
        console.log("Inside printName", this.name);
    }
};

// 4. Explicitly setting "this" using Call, apply, bind

const student2 = {
    name : 'Vinamra'
};

student.printName();

// student2 wants access to printName but it doesn't have any, so we'll use CALL 

student.printName.call(student2); // this refres to the argyment , i.e. student2

// 5. This inside arrow () : arrow ()s do not have binding to this, they refer to the ENCLOSING LEXICAL ENVIRONMENT

const obj2 = {
    a : 10,
    x : () =>{
        console.log("inside object2's method", this);
        console.log(this.a); // 10 as this belongs to obj here.
    }
};

obj2.x(); // globalObject


const obj3 = {
    a : 30,
    x : function(){
        console.log(this); // A
        // const y = ()=>{
        //     console.log("inside object3");
        //     console.log(this); // this would behave as if the arrow () was not present / Enclosing Lexical context, See A
        // }
        // y();
    }
};

obj3.x();

// 6. Inside the DOM - will be the reference to the HTMl where it is written. 

// 7. Inside the class - refres to the instance of the class

class Person {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

const person = new Person("Bob");
person.sayName(); // "Bob"

// 8. Event Handlers - this refers to the element that triggered the event in case of normal ()s.

// When using arrow functions in event listeners, the behavior of this differs from regular functions. 
// As it refers to the surrounding LEXICAL sope.

const button = document.createElement("button");
button.textContent = "Click Me!";
document.body.appendChild(button);

const obj4 = {
    name: "My Button",
    
    // Using a regular function
    regularHandler: function () {
        button.addEventListener("click", function () {
            console.log("Regular Function:");
            console.log(this); // Refers to the button element
        });
    },
    
    // Using an arrow function
    arrowHandler: function () {
        button.addEventListener("click", () => {
            console.log("Arrow Function:");
            console.log(this); // Refers to the `obj` instance
            console.log(`Button Name: ${this.name}`); // Accessing `name` from `obj`
        });
    }
};

// Attach the listeners
obj4.regularHandler(); // Attaches a regular function as a listener
obj4.arrowHandler();   // Attaches an arrow function as a listener

/**
 * Behavior Analysis
Regular Function:

Inside the regular function, this refers to the element that triggered the event (in this case, the button).
Output for the regular function:

Regular Function:
<button>Click Me!</button>
Arrow Function:

The arrow function does not have its own this and instead inherits this from the enclosing lexical scope, which is the obj object in this example.
Output for the arrow function:

Arrow Function:
{ name: "My Button", regularHandler: f, arrowHandler: f }
Button Name: My Button

Key Takeaways : 

When using a regular function in an event listener, this refers to the element that fired the event.
When using an arrow function, this inherits from the surrounding lexical scope, so it refers to the object (obj) where the arrow function was defined.
 */
