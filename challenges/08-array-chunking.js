'use strict';
// CHALLENGE : ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // Solution 1
    // // init chunked arr 
    // const  chunkedArr = [];
    // // set index
    // let i = 0;

    // // loop while index is less than array length 
    // while(i < arr.length){
    //     // slice our from the  index to index  + 
    //     // chunk length and push on the chunked array
    //     chunkedArr.push(arr.slice(i, i+ len))
    // };

    // Solution 2 (HighOrderFunctions)
    // init chunked arr
    let  chunkedArr = [];
    // loop through arr
    arr.forEach(function(val){
        // get last element 
        let last  = chunkedArr[chunkedArr.length - 1];

        // checked if last and if last length eqaul to the chunk len
        if(!last || last.length === len){
            chunkedArr.push([val]);
        }else{
            last.push([val]);
        }
    })
    return chunkedArr;
}

let result  = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);