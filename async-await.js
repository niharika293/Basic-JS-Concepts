/**
 * async and await are syntax features introduced in ES2017 (ES8) that make working with asynchronous code in JavaScript
 * easier and more readable. They are built on top of Promises and provide a way to
 * write asynchronous code that looks and behaves like synchronous code.
 * 
 * Async : keyword used before a () name to make it async. 
 * async () always returns a promise.
 * If the promise is not returned , then the () will automatically wrap the value in a promise 
 * & will return that promise.
 * Async & Await combo together is used to handle the promises. 
 * Why do we need async / await?
 *      - Before async/await, Promises were handled with .then() and .catch().
 *      - While .then() worked, it could lead to harder-to-read code for complex workflows.
 *      - async/await simplifies asynchronous code, makes it easier to write and debug, and allows for more intuitive error handling.
 * How the promises were handled before async await ?
 *  1. using .then() for chaining -> resulted in multiple callbacks / PROMISE HELLS 
    *  function fetchData() {
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve("Data fetched!"), 1000);
            });
        }
        fetchData()
        .then((data) => {
            console.log(data); // Output: Data fetched!
            return "Processing data...";
        })
        .then((processedData) => {
            console.log(processedData); // Output: Processing data...
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    2. Handling Multiple Promises: To run multiple asynchronous operations simultaneously, developers used Promise.all.
    However, error handling for deeply nested or sequential logic could become cumbersome.
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve) => setTimeout(() => resolve("Hello!"), 1000));
    const promise3 = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
    );
    Promise.all([promise1, promise2, promise3])
        .then(([result1, result2, result3]) => {
            console.log(result1); // Output: 3
            console.log(result2); // Output: Hello!
            console.log(result3); // Output: Array of posts
        })
        .catch((error) => {
            console.error("Error:", error);
        }
    );
* How to write async functions / How to convert sync () to async() ? 
    -> Use "async" keyword only before the () name.
    -> Use "await" keyword in front of the promise that needs to be resolved.
    -> AWAIT : only to be used inside the async ().
 * Which one is better - Promises or async await? 
    - Async await is just syntactical sugar , BTS JS is running the native promises code 
    - JS has provided us a better syntax, we can use it to make our code better
    - It also saves us from callbacks / promise hells
    - Code is more readable & scalable with async await.
 */
/**
 * FETCH : fetch API is given by the browsers to  make API calls & establish communication b/w a client
 * and a server. 
 * 1. It returns a PROMISE which resolves to the response object which represents the response from the server.
 * This promise can be handled by using .then / async await etc. 
 * 2. Support for GET, PUT, POST , DELETE , PATCH etc. 
 * 3. Configurations for Headers, body and more. 
 * The Response Object
    - The Response object provides several useful methods to handle the server's response:
    - response.text(): Reads the response and returns it as a plain text string.
    - response.json(): Parses the response body as JSON which is again a promise.
    - response.blob(): Reads the response and returns it as a binary large object (Blob).
    - response.ok: Boolean indicating whether the HTTP status code is in the range 200–299.
    - response.status: The HTTP status code of the response (e.g., 200, 404).
 * Options Object
    - The fetch function allows for customizing the request via the options parameter. 
    - Common options include:
        - method: HTTP method (e.g., GET, POST, PUT, DELETE).
        - headers: HTTP headers (e.g., Content-Type).
        - body: The data to send with POST or PUT requests.
        - mode: The mode of the request (e.g., cors, no-cors, same-origin). 
 */
const pr = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise pr resolved value!!");
    }, 5000);
});

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise pr2 resolved value!!");
    }, 10000);
});

// async function getData() {
//     // return "Namaste!!"; //since it's returning something, hence we need to capture it in some placeholder.
//     // Even if it returns a promise, it won't be wrapped into another promise. It'll be returned as it is.
//     return pr; 
// } 

// if we don't use async await then JS Engine won't wait for the promise to be resolved i.e. sync code will 
// be executed first 

function getData(){
    pr.then((res) => console.log(res));
    console.log("hello world!");
}

const dataPromise = getData();
console.log(dataPromise); //Returns a promise always even if anything is wrapped inside of it.

// To extract the data from the promise, we would use .then 

// dataPromise.then((res) => console.log(res));

// if we use async await then, JS Engine waits the promise to be resolved. 

/**
 * When this () gets executed, hello world! will be printed first. 
 * When JS engine sees the await, handlePromise() will be suspended from the call stack so that the main thread
 * doesn't get blocked for other operations. 
 * until the promise gets resolved, then it will come back again in the call stack 
 * & will resume from where it left off.
 * Then again it seees await, it will suspend again until the pr2 resolves, post that it'll come back to 
 * call stack again.
 */
async function handlePromise() {
    console.log("hello world!");
    // Whichever promise is written first will be resolved first, no matter how early / late it gets resolved.
    const val = await pr;
    console.log("Inside handlePromise");
    console.log(val);
    const val2 = await pr2;
    console.log("Inside handlePromise 2");
    console.log(val2);
}

handlePromise();

// real world examples 

let API_URL = "https://api.github.com/users/niharika293";

async function handlePromiseReal() {
    // const res = await fetch(API_URL);
    // // After fetch - we get a RESPONSE Object which is again a promise, hence we'll use await again. 
    // // console.log(res?.json());
    // const jsonValue = await res.json();
    // console.log(jsonValue);

    // Alternative : since REsponse is also a promise thats why we use then again.

    fetch(API_URL).then(res => res?.json()).then(res => console.error(res));
}

handlePromiseReal();

// error handling - 
// 1. Wrap the statements inside the async in "TRY" block & then catch errors using "catch".

async function handlePromiseReal2() {
    try {
        // either this
        // const res = await res.json();
        // const jsonValue = await res.json();
        // or this 
        fetch(API_URL).then(res => res?.json()).then(res => console.log(res));
        console.log(jsonValue);
    } catch (error) {
        console.log(error);
    }
}
// or 2. using .catch() after calling the method, as async ()s return us a promise, hence we can use
// .catch() 
handlePromiseReal().catch((err) => console.error(err));


