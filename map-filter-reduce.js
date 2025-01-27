const arr = [5, 20, 40, 98, 33, 19, 14, 11];

console.log("arr", arr);

// Map - tranforms the array. doesn't modify original array, instead returns a new one.

function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2);
}
// map iterates over each & every element of the array, produces the output. Map - accepts a callback ().  
const output = arr.map(double);
const outputTriple = arr.map(triple);
const outputBinary = arr.map(binary);

console.log("double - output", output);
console.log("output - triple", outputTriple);
console.log("output - binary", outputBinary);

// Higher order functions can also be passed in the map. 

// const outputDiameter = arr.map(function calculateDiameter(x){
//     return x*2;
// });

// Arrow functions too can also be passed.

outputDiameter = arr.map((x) => x*2 );

console.log("outputDiameter :: ", outputDiameter);

// filter - filters out data & returns a new array, doesn't modify original array. () calls can be passed/
// arrow () / callback function can be directly defined too.

function checkEven(x){
    return x%2===0;
}

const even = arr.filter(checkEven);
console.log('even', even);


const odd = arr.filter(function checkOdd(x){
    return x%2;
});

console.log("odd", odd);

const greaterThan25 = arr.filter((x) => x>25);
console.log("greaterThan25", greaterThan25); 

//  sum / max 

function findSum(arr){
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return sum;
}

console.log("sum using forEach", findSum(arr));

const output1 = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
}, 0);

console.log("sum using reduce", output1);

function findMax(arr){
    let max = 0;
    arr.forEach(el => {
        if(el > max){
            max = el;
        }
    });
    return max;
}

console.log("max element", findMax(arr));

const output2 = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0)

console.log(' max from reduce', output2);

const users = [
    {firstName : 'Raj', lastName : 'Kappor', age : 24 },
    {firstName : 'Donald', lastName : 'Duck', age : 25 },
    {firstName : 'Jeff', lastName : 'bezoz', age : 35},
    {firstName : 'Ranbeer', lastName : 'kapoor', age : 35 },
    {firstName : 'Sharaukh', lastName : 'Khan', age : 15},
];

// List of full names

// const fullNames = users.map(function(el){
//     return el.firstName + el.lastName;
// });

const fullNames = users.map(x => x.firstName + " " + x.lastName);

console.log("fullNames", fullNames);

// How many people have different ages {24 : 1, 25 : 1, 35 : 2, 55 : 1}
// using reduce - to find count after iteration

const usersAge = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = acc[curr.age] + 1;
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log("usersAge", usersAge);

// first names of all the people whose age < 30

// const ageLessThan30Users = users.filter((x) => x.age < 30).map(x => x.firstName);

const ageLessThan30Users = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [])

console.log("ageLessThan30Users", ageLessThan30Users);

