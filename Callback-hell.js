/**
 * JS : Single Threaded PL.
 * Callback functions : Functions can be passed into another functions, & when that's done,
 * they are known as Callback functions. 
 * 
 */

// Examples 

function x(){
    console.log("inside x");
}

x(function y(){
    console.log("inside y");
}); //This will simply output : inside x, as we're calling x() but x doesn't accept any parameters but we're passing callbacks to it. 

// to call y, we need to modify function x, changing the name for more clarity

function x1(callback){
    console.log("inside x1");
    callback();
}

x1(function y(){
    console.log("inside y");
});

// Async operation : example - setTimeOut() : executes after 5s, without callback() it doesn't work properly
// therefore, to involve async code / API dependent code we need to have callback functions.
setTimeout(function(){
    console.log("timer");
}, 5000);

// E-commerce Example : 

const cart = ['Shoes', 'Jacket', 'Purse'];
let api;

api.createOrder();
api.proceedToPayment();

// We want the users to proceed with the payment only when the orders are created.
// We have callback ()s for the rescue here. 

api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary();
    });
});

// When we have multiple callbacks / API calls/ dependencies, we have a problem called as "CALLBACK HELL".
// here, the code groes HORIZONTALLY instead of VERTICALLY, & beccomes quite unreadble, unmaintainable. 
// When this type of code grows extensively larger, the situation is called as "PYRAMID OF DOOM".

/**
 * INVERSION OF CONTROL : Drawback of callback hell. 
 * It involves losing control over code while using callbacks. 
 * It's risky too, as we're giving the control to the API / server side opeartions in real time scenarios
 * and we don't even know what's happening BTS. 
 * Some developers might be interns, uncertain factors may arise too such as delay in responses. 
 * Bugs - risk factor, which may fail the operation & break our code. 
 * So, All in all callbacks - crucial part, but they also come with drawbacks :
 * - CALLBACK HELL leads to-> UNMAINTAINABLE CODE , PYRAMID OF DOOM
 * - INVERSION OF CONTROL leads to -> LOSS OF CONTROL 
 */



