let name = {
    firstName : 'Steve',
    lastName : 'Madden',
    printFullName : function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

name.printFullName();

let name2 = {
    firstName : 'Nik',
    lastName : 'Bakers',
    // We may however have the same method here as well..but not recommended.. DRY avoided.. LOC increases
    // printFullName : function(){
    //     console.log(this.firstName + " " + this.lastName);
    // }
}

// Function Borrowing -- Achievable via call(), apply(), bind()

name.printFullName.call(name2); // will print Nik Bakers

// but in general, if we want to have reusable methods, we don't keep them inside a particular object.

let name3 = {
    firstName : 'John',
    lastName : 'Madden',
}
// rather we declare the methods separately so that they can be reused by other objects.

let printFullName =  function(){
    console.log(this.firstName + " " + this.lastName);
}

printFullName.call(name3);

let name4 = {
    firstName : 'Harry',
    lastName : 'Bakers',
}

printFullName.call(name4);

// In case of arguments

let printFullDetails =  function(city, state, postalcode){
    console.log(this.firstName + " " + this.lastName + " from city" + city + "state : ",
     state + "area code ", postalcode);
}
// Arguments can be passed after calling an object, if no arg then undefined
printFullDetails.call(name3,"delhi", "Delhi");
printFullDetails.call(name4,"delhi", "delhi", "119911");

// Apply method - works same, only diffrence - way in which args are passed. 
// Apply - args are passed in [] , whereeas call -> , separated
// call, apply- called at the moment, bind- in future, we will call.

printFullDetails.apply(name3, ['Del', 'del', 115566]);

// bind () - similar to call (), but diffrence -> instead of calling the () directly, 
// it binds the method to an object upon whgich are calling 
// it & returns us the copy of the method. 

let printOutput = printFullDetails.bind(name4,"delhi", "delhi", 119911);

console.log("printOutput", printOutput);

// consoling it - returns a function, if need - we can invooke it

printOutput();

// Diff b/w call, bind -> Bind gives us copy rather than directly calling a () which is done by call.
