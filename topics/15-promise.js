'use strict';


// Pending, Rejected, Fulfiled

const value = 2;

const promise = new Promise((resolve, reject)=>{
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === value){
        resolve('You Guessed the number !');
    }else{
        reject('Wrong Number !');
    }
});

// console.log(promise);

promise.then((data)=> console.log(data))
    .catch((err)=> console.log(err));

// Promise Example

// after 1s first red
// after 3s second blue
// after 2s third green
// theese in siquence 


const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    addColor(1000, '.first', 'red')
        .then(() => addColor(3000, '.second', 'blue'))
        .then(() => addColor(2000, '.third', 'green'))
        .catch((err)=>console.log(err));
})

function addColor(time, selector, color,data){
    const element  = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
      if(element){
          setTimeout(()=>{
            element.style.color = color;
            resolve(data)
          }, time);
        }else{
            reject(`There is no such element : "${selector}"`);
        } 
    });
};