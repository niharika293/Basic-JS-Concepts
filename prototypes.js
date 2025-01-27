let arr = [10, 20, 49];

let obj = {
    id : 1,
    name : 'Annie',
    getName :function() {
        return this.name;
    }
}

function f1(){
    console.log("Inside F1");
}

function f2(){
    console.log("Inside F2");
}

Function.prototype.myFunction = function(){
    console.log("Inside myFunction from function.protoType");
}

// Usage : Output : Inside myFunction from function.protoType

f1.myFunction();
f2.myFunction(); 

let obj2 = {
    empId : 777,
    // name : 'Bill gates'
}

// proto vs Prototype

function Animal() {}
const dog = new Animal();

console.log(dog.__proto__ === Animal.prototype); // true
console.log(Animal.prototype); // Prototype object for instances
