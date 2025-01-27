// primitive data types 
// Number, string, boolean, null, undefined -> Naturally Immutability 
// Means can't be changed. They're tightlly coupled to the variable they're assigned to.
// After copying, changes in the new variable won't cause any change in the old.  

let a = 5;
let b = a;

console.log(" a before", a);
console.log(" b before", b);

b = 6;

console.log(" a after", a);
console.log(" b after", b);

let isApplied = true;
isNotApplied = isApplied;

isNotApplied = false;

console.log("isApplied", isApplied, "isNotApplied", isNotApplied);


// Composite Data Types - Arrays & objects.
// In JS, Arrays are nothing but Objects, so they both behave in the same way almost!

let arr = [1,2,3];

let newArr = arr; // craetes a shallow copy.

console.log("arr", arr);
console.log("newArr before", newArr);

newArr[1] = 5;

console.log("arr after", arr);
console.log("newArr after", newArr);

// To prevent shallow copy - Spread opeartor, map, filter, reduce - as these 3 result in new []. 

newArr2 = [...arr]; //spread operator to deep copy 
newArr2[1] = 7;
console.log("arr after", arr);
console.log("newArr2 after", newArr2);

let arr3 = [
  'Nik',
  'bakers',
  'delhi',
  arr4 =[
    'Hyd',
    'Del'
  ]
];

console.log("arr3", arr3);

// let newArr3 = [...arr3];
let newArr3 = JSON.parse(JSON.stringify(arr3)); //to deep copy.

console.log("newArr3", newArr3);
newArr3[2] = "Jammu";

console.log("arr3", arr3);
console.log("newArr3", newArr3);


// Objects 

let emp ={
    id : 32,
    name : 'Jack',
    dept : 'Sales'
};

// let newEmp = emp; // shallow copy 
// Spread operator to deep copy

// let newEmp = {...emp};

// Object.assign to deep copy, First paramter - always modified, second paramter - object to copy.
let newEmp = Object.assign({}, emp);

newEmp.name = 'Ryan';

console.log("emp", emp);
console.log("new emp", newEmp);


let person ={
    id : 32,
    name : 'Jack',
    dept : 'Sales',
    personal : {
        children : 2,
        Hobby : 'Music'
    }
};

// let newPerson = {...person};
// manually copying nested objects 

// let newPerson = {...person, personal : {...person.personal}};

let newPerson = JSON.parse(JSON.stringify(person));

newPerson.personal.children = 5;

console.log("person", person);
console.log("new person", newPerson); 
