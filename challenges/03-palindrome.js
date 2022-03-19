'use strict';
// CHALLENGE : VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    const revString = str.split('').revere().join('');
    return revString === str;
}

const result = isPalindrome('racecar');
console.log(result);