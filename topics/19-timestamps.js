'use strict';

// Timestamps
console.log(new Date());

// Unix Time 
// January 1, 1970

// Date.now()
console.log(Date.now());

// new Date().getTime()
console.log(new Date().getTime());

// new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now())
},1000);

// create id's ( for testing/learning only)
let people = [];
people = [...people, { id: Date.now(), name:'Luka'}];

setTimeout(()=>{
    people = [...people,{id: Date.now(), name:'Bobba'}];
}, 1000);
// create/get dates
const now = Date.now();
const futureDate = new Date(now + 1000 + 60)

console.log(now);
console.log(futureDate);


// differnece between dates
const firstDate = new Date();
const secondDate = new Date(2022, 3, 16);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

const timeDiff = secondValue - firstValue;
const minutes  = timeDiff / (1000 * 60);
const hours = timeDiff / (1000 * 60 * 60);
console.log(minutes);