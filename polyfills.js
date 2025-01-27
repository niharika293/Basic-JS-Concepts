let arr = ['Hi', "Bye", "tata"];

function consoleArr(x){
    console.log(x);
}

// arr.forEach(x => console.log(x));

// arr.forEach(x => consoleArr(x));

// Now in Polyfill, arr -> Array.prototype{Since we need to mention it explicitly}, 
// forEach -> custom name put, consoleArr -. our own callback (), x -> This

// A prototype is an existing inbuilt functionality in JavaScript.
//  Whenever we create a JavaScript function, JavaScript adds a prototype property to that
//   function. A prototype is an object, where it can add new variables and methods to the 
//   existing object. i.e., Prototype is a base class for all the objects, and it helps us to
//    achieve the inheritance. 

// https://www.toolsqa.com/javascript/prototype-in-javascript/

Array.prototype.myForEach = function(cb){
    // console.log("this", this);
    for(let i=0; i<this.length; i++){
        cb(this[i]);
    }
}
arr.myForEach(consoleArr);

// map - diff b/w map & forEach : map - returns a new array, forEach works on the same array. 
// But map - semantic meaning => TRansformation / Modification!

// Similarity- both are for traversing / iterating purpose.  

const outputForEach = arr.forEach(x => console.log(x));

console.log("outputForEach", outputForEach); //returns undefined

// const outputMap =  arr.map(x => x + " world " );

// console.log("outputMap", outputMap);

// In order to make it accessible to all the array instances, we use Arry.prototype

Array.prototype.myMap = function(cb){
    console.log("Inside myMap polyfill");
    let newArr = [];
    for(let i=0; i<this.length ; i++){
        newArr.push(cb(this[i]));
        console.log("newArr", newArr);
    }
    // console.log("newArr", newArr);
    return newArr;
}

const outputmyMap = arr.myMap(x => x + " world ");
console.log("outputmyMap",outputmyMap);

// filter - to filter out records

let num = [10,20,30,11,45,77,42];

// const greaterThan15 = num.filter(x => x>15);

// console.log("greaterThan15", greaterThan15);

// Polyfill -

Array.prototype.myFilter = function(cb){
    let newArr = [];
    for(let i=0; i<this.length ; i++){
        // Without using if statement - since, output arris returning true, false etc as we've passed 
        // a condition in our callback, so only when the condition meets we should push in the array.
        if(cb(this[i])){
            newArr.push(this[i]);
        }
    }
    return newArr;
}

const greaterThan15 = num.myFilter(x => x>15);
console.log("greaterThan15", greaterThan15);

// reduce -> when we need only 1 value from an array, after consuming it. 

const maxNum = num.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0);

console.log("maxNum", maxNum);

const sumNums = num.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
}, 0);
console.log("sumNums", sumNums);

// Polyfill : Older browser compatibility - alternate implementations

// ?My initial Implementation, since i couldn't match the signatures properly.
// Array.prototype.myReduce = function(cb){
//     let acc = 0;
//     for(let i=0; i<this.length; i++){
//         acc = acc + this[i];
//     }
//     return acc;
// }
// 2nd implementayion

// Array.prototype.myReduce = function(cb,initialValue){
//     let acc = 0;
//     for(let i=0; i<this.length; i++){
//         acc = acc + this[i];
//     }
//     return acc;
// }
// const sumPolyfill = num.myReduce();


// 3rd - valid according tor resources

Array.prototype.myReduce = function(cb, initialValue){
    let acc = initialValue;
    for(let i=0; i<this.length ; i++){
        acc = cb(acc,this[i]);
    }
    return acc;

}

const sumPolyfill = num.myReduce(function(acc,curr){
    return acc + curr;
},0);
console.log("sumPolyfill", sumPolyfill);

// Polyfill for multiply array items. 

console.log("arr", arr);
console.log("num", num);
// num = [10,20,30];
// const multiplyReduce = num.reduce(function(acc, curr){
//     acc = acc * curr;
//     return acc;
// }, 1); 

// console.log("multiplyReduce", multiplyReduce);


Array.prototype.myMultiPlyReduce = function(cb,initialValue){
    let acc = initialValue ? initialValue : this[0];
    let index = initialValue ? 0 : 1;
    for(let i=index; i<this.length; i++){
        
        acc = cb(acc , this[i]);
    }
    return acc;
}

// no need to mention again myMultiplyReduce.. as myreduce is generic & can be used again witha diff logic


// const multiplyPolyfill = num.myMultiPlyReduce(function(acc, curr){
//     return acc*curr;
// });

const multiplyPolyfill = num.myReduce(function(acc, curr){
    return acc*curr;
},1);


console.log("multiplyPolyfill", multiplyPolyfill);





let arr1 = [{ c: 1}, { c: 2} , { c: 3} ];
 
console.log(arr1.map((el) => el.c));

console.log(arr1.reduce((a,cu) => {
    a.push(cu.c)
        return a;
}, []))


console.log(arr1.myMultiPlyReduce((a,cu) => {
    a.push(cu.c)
        return a;
}, []))

// [1,2,3]

// --Call, Apply, Bind
// call also takes paarmetrs
let person1 = {
    name : 'Ramesh',
    place : 'Delhi',
    // getFullDetails : function(){
    //     return console.log(this.name + " from " + this.place);
    // } generally () is put outside sor reusability.
}

function getFullDetails(age, year){
    return console.log(this.name + " from " + this.place + " and " + age + " years old" + "born in" + year);
}

// person1.getFullDetails();

getFullDetails.call(person1,34);

let person2 = {
    name : 'Suresh',
    place : 'jaipur',
}

// person1.getFullDetails.call(person2); commenting 

getFullDetails.call(person2, 45);

// For function polyfill -> to make it available for all the functions 
//...args - rest operator as the calling () can have any no. of args

Function.prototype.myCall = function(obj = {}, ...args){
    console.log(this); // returns ()
    console.log(obj); // returns obj
    // Extra check is needed to avoid any other data types to be called
    if(typeof this !=='function'){
        throw new Error('Not callable');
    }
    // We have the object & the (), but to use it we need to attach the () to the object
    obj.fn = this;
    console.log("Modified obj", obj);
    obj.fn(...args);
}

// To call it 
console.log("using call polyfill");
getFullDetails.myCall(person1,26); //using polyfill

// Apply -

getFullDetails.apply(person1,[27,28,29]);
// getFullDetails.apply(person2,60,70,80); will throw exception


Function.prototype.myApply = function(obj = {}, ...args){
   console.log("inside myApply", this);
   console.log("obj", obj);
   console.log("args", args);
   if(typeof this!=='function'){
    throw new Error('Not callable');
   }
   if(!Array.isArray(...args)){
    throw new Error('CreateListFromArrayLike called on non-object');
   }
   obj.fn = this;
   obj.fn(...args);
}

getFullDetails.myApply(person2,[90]);
// getFullDetails.myApply(person1,60,70,80); // error

// Bind -> will give us the copy of the (), instead of changing the ()

let bindOutput = getFullDetails.bind(person1,68);
// let bindOutput = getFullDetails.bind(person1); valid too & another arg can be passed while calling

console.log("bindOutput", bindOutput);
bindOutput(); // no arg while calling
// bindOutput(99); // passing argument while calling

// My First implementation
// Not returning a ().. will get it reviewed as in JS () are also objects
// Function.prototype.myBind = function(obj = {}, ...args){
//     console.log('this from myBind', this);
//     console.log('args', ...args);
//     if(typeof this!=='function'){
//         throw new Error('Not callable');
//     }
//     obj.fn = this;
//     let newObj = {...obj};
//     console.log('newObj', newObj);
//     newObj.fn(...args);
// }

Function.prototype.myBind = function(obj = {}, ...args){
    console.log('this from myBind', this);
    console.log('args', ...args);
    if(typeof(this) !== 'function'){
        throw new Error('Not callable');
    }
    obj.fn = this;
    return function(...args2){
        obj.fn(...args,...args2)
    }
}

let myBindOutput = getFullDetails.myBind(person2,99);
myBindOutput(1997);

//includes 

const outputIncludes = arr.includes('Joel');
console.log("outputIncludes", outputIncludes);

// Polyfill for includes 

Array.prototype.myIncludes = function(cb){
    console.log("cb", cb);
    console.log("this", this);
    let result;
    for(let i=0; i<this.length ; i++){
        return result = true ? cb == this[i] : false;
        // if(cb == this[i]){
        //     return true;
        // }
        // else{
        //     return false;
        // }
    }
}

const outPutIncludesPolyfill = arr.includes('taa');
// arr.myIncludes(23);
console.log("outPutIncludesPolyfill", outPutIncludesPolyfill);