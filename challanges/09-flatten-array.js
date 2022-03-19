'use strict';
// CHALLENGE : FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // Solution 1
    // return arrays.reduce(function(a,b){
    //     return a.concat(b);
    // });

    // Solution 2
    // return [].concat.apply([], arrays);

    // Solution 3
    return [].concat(...arrays);
}