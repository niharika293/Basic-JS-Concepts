// 1. partial example of closure : as inner() is executed inside outer() immedieatley , 
// instead of being returned and called later. 
// Closure's effect is not observable as outer() executes while inner() still runs. 
let global = "123";

function outer(){
    let x = 2;
    function inner(){
        let y = 3;
        console.log("Inside inner : x => ", x);
        console.log("Inside inner : global => ", global);
    }
    inner();
}

outer();

// 2. Correction - try to return inner & then call it later to completely leverage the closure.
//  Now, x is still accessible even though outer has finished running!
// ✅ This properly shows "closure behavior", where a function retains access to variables after
//  their parent function has executed.
function outer2(){
    let x = 22;
    return function inner(){
        let y = 33;
        console.log("Inside inner : x => ", x);
        console.log("Inside inner : global => ", global);
    }
}

outer2()();