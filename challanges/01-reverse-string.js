'use strict';
// CHALLENGE : REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // Solution 1
  // const strArr = str.split('');
  // strArr.reverse();
  // return str.join('');

  // Solution 2
  // let revString ='';
  // for(let i=str.length-1; i>=0 ; i--){
  //    revString = revString + str[i];
  // }
  // return revString;

  // Solution 3
  // let revString ='';
  // for(let i=0; i<=str.length-1; i++){
  //    revString = str[i] + revString;
  // }
  // return revString;

  // Solution 4 (ES6)
  // let revString ='';
  // for(let char of str){
  //   revString = char + revString;
  // }
  // return revString;

  // Solution 5 (HighOrderFunctions)
  // let revString ='';
  // str.split('').forEach((char)=> revstring = char + revString);
  // return revString;

  // Solution 6 (Reduce)
  return str.split('').reduce((revString,char)=> char+ revString,'')
}

const result = reverseString('hello');
console.log(result);