'use strict';
// CHALLENGE : ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2){
    return formatStr(str1) === formatStr(str2)
}

function formatStr(str){
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}
let result = isAnagram('Dormitory', 'dirty room')
console.log(result);