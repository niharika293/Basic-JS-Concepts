// var expect = function (val) {
//     let num = val;
//     toBe(num);
// };

// function toBe(val) {
//     if (num === val) {
//         return { "value": true };
//     }
//     else {
//         notToBe(val);
//     }
// }

// function notToBe(val) {
//     if (num !== val) {
//         return { "error": "Not Equal" }
//     }
//     else {
//         return false;
//     }
// }


// expect(5).toBe(5);

// let regex = new RegExp("Set of [0-9]+");
// match = regex.exec("Set of 129999 (sf, adf,sdf) sad a7777dada aw9999999dasd asdas ");
// console.log("match", match);

// Both rest , spread have same syntax.

// rest - ...others result in the comibation of the extra elements in an [].
function addNumbers(a, b, c,...others){
    console.log("others", others); //returns [9,8,7]
    console.log("others", ...others); // 9 8 7
    return others.reduce((acc, curr) => {
        acc = acc+ curr;
        return acc;
    },(a+b+c));
    // return a+b+c;
}

const outputAdd = addNumbers(1,2,3,9,8,7);
console.log("outputAdd", outputAdd);

// Spread - results in seggregation of iterables into individual items.

let names = ['Amitabh', 'Jaya', 'Alia', "Raha"];

function getNames(name1, name2, name3){
    console.log("names", name1, name2, name3); //Amitabh Jaya Alia
}

getNames(...names); // ... will seggregate the items & pass them individually.
// even if we pass extra argument , no error.

// Basic Destructuring 

let student = {
    name :'Rihanna',
    age : 25,
    concerts : ['Hyd', 'Del']
}

const {ageee} = student; // undefined as the key name shud match.
console.log("age", ageee);

// const {name} = student;
// console.log("name", name);

//Destructuring using rest

const {name, ...others} = student;
console.log("name", name, "rest -", others);

//Over writing values using spread - change a particular property 

let newStudent = {...student};
console.log("newStudent", newStudent);
newStudent = {
    ...student,
    age : 95
}
console.log("newStudent after modification", newStudent);

var map = function(arr, fn) {
    let newArr = [] ;
    console.log("this", this);
    for(let i=0; i<arr.length ; i++){
        console.log(arr[i]);
        newArr.push(fn(arr[i],i));
    }
    console.log("newArr", newArr);
    return newArr;
};

// console.log(map([1,2,3], fn = function plusone(n) { return n + 1; }));
// console.log(map([1,2,3], fn = function plusI(n, i) { return n + i; }));

var filter = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length ; i++){
        if(fn(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
};



console.log(filter(arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }));