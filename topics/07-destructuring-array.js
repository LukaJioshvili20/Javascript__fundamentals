'use strict';

// fast-easy way to access||unpack variables from arrays... objects

const colors = ['red', 'green', 'blue'];
const friends = ['Luka','George','Anna','John','Peter'];

const color_01 = colors[0];
const color_02 = colors[1];
const color_03 = colors[2];

console.log(color_01, color_02, color_03);


const [luka, george , anna , john , peter , susan] = friends;
// const [luka, , anna , , peter , susan] = friends;

// susan undefined 
console.log(luka, george , anna , john , peter, susan)


// swapping values
let first = 'Luka';
let second = 'Bob';

// let tmp = second;
// second = first;
// first = tmp;

[second, first] = [first, second]
console.log(first, second)