'use strict';
// CHALLENGE : LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // // filtered array
    // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // // sort by length
    // const sorted = wordArr.sort(function(a, b){
    //     return b.length - a.length;
    // });
    // // if multiple words , put into array
    // const longestWordArr = sorted.filter(function(word){
    //     return word.length === sorted[0].length;
    // });
    // // check if more than array val
    // if(longestWordArr.length === 1){
    //     return longestWordArr[0];
    // }else{
    //     return longestWordArr;
    // }
    
    // Solution 2 (ES6)
    // filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // sort by length
    const sorted = wordArr.sort((a, b)=> b.length - a.length);

    // if multiple words , put into array
    const longestWordArr = sorted.filter((word)=> word.length === sorted[0].length);
    
    // check if more than array val
    if(longestWordArr.length === 1){
        return longestWordArr[0];
    }else{
        return longestWordArr;
    }
}

const result = longestWord('Hi there, my name is Brad');
console.log(result);
