'use strict';
// CHALLENGE : SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']


// Solution 1 - arguments, indexOf, filter
// function seekAndDestroy(arr) {
//     const args = Array.from(arguments);

//     function filterArr(arr){
//         // return true if not in array
//         return args.indexOf(arr) === -1;
//     }

//     return arr.filter(filterArr);
// }


// Solution 2 - ...rest, filter , includes
function seekAndDestroy(arr,...rest){
    return arr.filter(val => !rest.includes(val))
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6))