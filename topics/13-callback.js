'use strict';

function makeUpperCase(value){
    console.log(value.toUpperCase())
}

// makeUpperCase('luka')

function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb){
    const fullName =`${name} Fett`;
    cb(fullName);
    // can add more logic
}
// handleName('Jango', makeUpperCase )
// handleName('Bobba', reverseString )

handleName('Bobba', (value)=>console.log(value));

const btn = document.querySelector('.btn')
btn.addEventListener('click', function(){
    console.log('Hello World')
})
// array methods, setTimout , event listeners

