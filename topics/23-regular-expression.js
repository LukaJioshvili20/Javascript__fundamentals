'use strict';
// Terribly akward,but extremely useful
// Regular expressions are a powerful tool for inpecting and processing strings.

// Can create both way
// let re1= new RegExp("abcde")
// let re2= /abcde/

// Some shortcuts
// \d - any digit character
// \D - A character that is not digit
// \w - an alphanumeric character ("word character")
// \W - A NON-anplhanumeric character
// \s - Any whitespace character (space, tab, newline)
// \S - A NON-whitespace character
// \b - A word boundaty


// . - can be any character expect for newline
// ^ - inverts sets of rules ( like "!" operator)
// + - plus sign indicates that element may be repeated more than once
// * - star sign indicates that element can be matched even zero times
// ? - question sign indicates that element may occor zero times or one time
// $ - end of the input



// should start with "abc"
console.log(/abc/.test("abcde"));
console.log(/abc/.test("axde"));

// can shorten 
console.log(/[0123456789]/.test("in 2022"));
console.log(/[0-9]/.test("in 2022"));

// date formatting
let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// formats like 01-01-2022 12:00 
console.log(dateTime.test("01-01-2022 12:00"));
console.log(dateTime.test("01-jan-2022 12:00"));

// better date formatting 
// {exact n} , {start n, end n} 
// {4} happerns 4 times 
// {2, 4} happerns twice or more max 4 times

let betterDateTime =  /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(betterDateTime("1-30-2022 9:00"))

// invert a set of characters
let notBinary = /[^01]/;
console.log(notBinary.test("11001010100111"));
console.log(notBinary.test("1000203110111"));

// match one or more digit characters 

console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));

// missing charater 
let neighbor = /neighbou?r/;
// console.log(neighbou.test("neighbour"));
// console.log(neighbou.test("neighbor"));


// Date Class
console.log(new Date());
// can create a specific time
console.log(new Date(2022, 1, 1));



// Choice patterns

let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"))
console.log(animalCount.test("2 dogs"))

// Replace method
// Greed
// Dynimcally creating RegExp Objects
// Search Method
// Last Index Property
// Looping over Matches