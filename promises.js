/**
 * Promise is an Object representing the eventual completion / failure of an async operation. 
 * Essentially, a promise is a returned object to which u can attach callbacks instead of passing callbacks
 * into a function. 
 * Promise Objects are immutable -> i.e. whenever they are fulfilled / whenever they have some data , nobody can mutate / modify
 * them. 
 * Promise Objects are resolved only once.
 * They save us from CALLBACK HELLS. 
 * Promises give us the trust to call our code just once as soon as they have data with them. 
 * States in promises : 
 * - PENDING : INITIAL STATE, Neither fulfilled nor rejected.
 * - FULFILLED : Operation was completed successfully. 
 * - REJECTED : Operation FAILED.
 * Why do we need promises? 
 *  -> Async nature of JS : as it's single threaded, & in case of multiple operations to avoid blocking the thread
 *  -> Improved Readability over callbacks 
 *  -> Error handling - using .catch / try or catch ina sync await
 *  -> Chaining & Composition : Allowing multiple async operations in sequence / using them parallely 
 *      by making use of utilities like Promise.all() or Promise.race()
 *  -> Integration with async / await. 
 */

const cart = ['Shoes', 'Jacket', 'Purse'];
// ctreateOrder API will give us the promise, Initially it'll be undefined, but few secons later when the api
// call is successful then it'll have some data.

// Creating promises 

const promise = createOrderAPI(cart);

// Suppose if the promise is executed successfully then we can pass a callback () to it 
// for further operations to implement the success flow of our requirements. 

promise
.then(function(orderID){  // for resolve callback
    console.log("orderID", orderID);
    // proceedToPayment(orderID);
}).catch(function(err){ // for reject callback
    console.error("error", err);
});

function createOrderAPI(){
    const pr = new Promise(function(resolve, reject){
        if(!validateCart()){
            const err = "Cart is not valid";
            reject(err);
        }
        else{
            const orderID = "122344";
            if(orderID){
                setTimeout(()=>{
                    resolve(orderID);
                }, 5000);
            }
        }
    });
    return pr;
}

function validateCart(){
    return false;
}

/**
 * PROMISE CHAINING : We can chain multiple promises, in order to make the code more readable & maintainable,
 * Whenever in case of promise chaining, we should always return somethign from the top of the chain to bottom.  
 */

createOrderAPI(cart)
.then((orderID) =>{
    console.log("order id", orderID);
    return orderID;
})
.catch((err) =>{
    console.error(err?.message || err);
})
.then((orderID) => {
    return proceedToPayment(orderID)
})
.then((paymentStatus) =>{
    console.log(paymentStatus);
})
//The .catch is placed at the end to handle all errors from the chain. 
//This prevents disruptions to the flow and ensures errors propagate correctly.
.catch((err) =>{
    console.error(err?.message);
})
// The .finally block is used for code that should execute regardless of the promise outcome. 
// It ensures the last message is logged.
.finally(() => {
    console.log("No matter what happens i will definitely be called!");
});

function proceedToPayment(orderID){
    return new Promise((resolve, reject) => {
        if(orderID){
            resolve(`Payment Successful for order id : ${orderID} !`);
        }
        else{
            console.log("order id in reject", orderID);
            reject({message : `Payment unsuccessful for order id : ${orderID} !`})
        }
    });
}









