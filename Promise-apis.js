// Promise.all ->  resturns an array of all the promises if they are resolved,
//  otherwise throws error for the rejected promise if any fails.


const p1 = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("p1 success"), 3000)
    setTimeout(() => reject("p1 fails"), 3000)
});
const p2 = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("p2 success"), 1000)
    setTimeout(() => reject("p2 fails"), 1000) // will give uncaught error, so pls catch it.
});
const p3 = new Promise((resolve, reject) =>{
    // setTimeout(() => resolve("p3 success"), 2000)
    setTimeout(() => reject("p3 fails"), 2000)
});

Promise.all([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.error(err));

// Promise.allSettled - waits for all the promises to settle (reject / resolve) & gives us the no. of promises
// that we pass in whether they're resolved / rejected.

Promise.allSettled([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.error(err));

// Promise.race - resolves or rejects as soon as the first promise settles whether success or failure. 

Promise.race([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.error(err));

// Promise.any - Waits for the first promise to be fulfilled, if all promises are rejected then output will be the 
// aggregated error of all the errors. 

Promise.any([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => {
    console.error(err);
    console.log(err?.errors); // for aggregateError in case of promise.any
});