'use strict';
// CHALLENGE : ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution 1 (ES5)
// function addAll(){
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;

//     for(let i=0; i<args.length; i++){
//         total += args[i]
//     }
//     return total;
// }

// Solution 2 (ES6) - forEach
// function addAll(...rest){ 
//     let total = 0;
//     rest.forEach((num)=> total += num);
//     return total;
// }

// Solution 3 (ES6) - Reduce
function addAll(...rest){
    return rest.reduce((acc, curr) => acc + curr)
}
console.log(addAll(2,5,6,7,3));