'use strict';

// Width||Height - window||any element
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any element

console.log('height', window.innerHeight);
console.log('width', window.innerWidth);

const btn = document.querySelector('.btn');
// create box html/css element then
const box = document.querySelector('.box');

btn.addEventListener('click', ()=>{
    const dimmensions = box.getBoundingClientRect();
    console.log(dimmensions);
})