let emp ={
    id : 32,
    name : 'Jack',
    dept : 'Sales'
};

let empStr = JSON.stringify(emp); //serialization
console.log("emp", emp);
console.log("empStr", empStr);

let empOriginal = JSON.parse(empStr); //Deserialization
console.log("empOriginal", empOriginal);