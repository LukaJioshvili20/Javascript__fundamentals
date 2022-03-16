'use strict';

// after 1s first red
// after 3s second blue
// after 2s third green
// theese in siquence 

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

// harder to manage with callbacks
// piramide structure sucks
// bette solution async, promises
btn.addEventListener('click', ()=>{
    // console.log('Hello there !')
    setTimeout(()=>{
        first.style.color = 'red';
        setTimeout(()=>{
            second.style.color = 'blue';
            setTimeout(()=>{
                third.style.color = 'green';
            },2000);
        },3000);
    },1000);
}); 