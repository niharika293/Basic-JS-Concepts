// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// var compose = function(functions) {
//     console.log("functions.length", functions.length);
//     return function(x) {
//         for(let i=functions.length-1; i>=0 ; i--){
//           console.log("i", i);
//           console.log("functions", functions[i]);
//           x = functions[i](x);
         
//         }
//         return x;
//     }
// };

// const fn1 = x=>x+1 ;
// const fn2 = x=>2*x;

// const fn = fn1(fn2(4));

// const fn = compose([x => x + 1, x => 2 * x])
// console.log(fn(4)); // 9


/**
 * @param {Function} fn
 * @return {Function}
 */


var once = function(fn) { 
        let isCalledOnce = false;
        // console.log("fn", fn);
        console.log("isCalledOnce", isCalledOnce);
        return function(...args){
            if(!isCalledOnce){
                isCalledOnce = true; 
                return fn(...args); 
            }
            else{
                return undefined;
            } 
        }
        
};


  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  console.log(onceFn(1,2,3)); // 6
  console.log(onceFn(2,3,6)); // returns undefined without calling fn

 