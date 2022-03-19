'use strict';
// CHALLENGE : REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revString = int
        .toString()
        .split('')
        .reverse()
        .join('');

    return parseInt(revString) * Math.sign(int);
}

const result = reverseInt(521);
console.log(result);