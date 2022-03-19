'use strict';
// CHALLENGE : CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    // Solution 1
    // const strArr = str.toLowerCase().split('');

    // for(let i=0; i<strArr.length;i++){
    //     strArr[i]= strArr[i].substring(0,1).toUpperCase() +
    //         strArr[i].substring(1);
    // }
    // return strArr.join(' ');

    // Solution 2 (HighOrderFunction)
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(function(word){
    //         return word[0].toUpperCase + word.substr(1)    
    //     })
    //     .join(' ')

    // Solution 3 (HighorderFuntion- ES6)
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map((word)=> word[0].toUpperCase()+ word.substr(1))
    //     .join(' ')

    // Solution 4 (RegularExpresions)
    return str.replace(/\b[a-z]/gi, function(char){
        return char.toUpperCase();
    })
}

const result = capitalizeLetters('i love javascript');
console.log(result);