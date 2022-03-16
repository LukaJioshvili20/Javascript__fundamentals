'use strict';

// Array.from - Not on protype

// from - returns Array Object from an boject
// with a length property or an iterable object
// from - turns array-like into array - string , nodeList , Set


const udemy = 'udemy';
console.log(Array.from(udemy));

const text = document.querySelectorAll('.text')
// console.log(text)
const newText = Array.from(text)
    .find((item)=> item.textContent === 'Hello')
console.log(newText)

const items = Array.from({length:100}, (_,index)=>{
    return index ;
})

const itemsPerPage = 14;
// if number is floating 
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({length:pages},(_,index)=>{
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + items.itemsPerPage);

    return tempItems;
})

console.log(newItems);