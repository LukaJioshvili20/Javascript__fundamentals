'use strict';

// MAP Method
// returns a new array
// does not change the size of the original array ( unlike Method filter)
// uses values from original array when making new one

const people = [
    {
        name: 'Luka',
        age: 20,
        positon: 'Front-end Developer'    
    },
    {
        name: 'Peter',
        age: 28,
        positon: 'Full-stack Developer'
    },
    {
        name: 'John',
        age: 23,
        positon: 'Back-end Developer'
    }
];
const getAges = (person) => person.age * 2; 
// const ages = people.map((person)=>  person.age)
const ages = people.map(getAges)
const newPeople = people.map((item)=>{
    return{
        firstName : item.name.toUpperCase(),
        oldAge : item.age + 20
    };
})
console.log(people)
console.log(newPeople)

const names = people.map((person)=> `<h2>${person.name}</h2>`);
const result = document.querySelector('#result')
// separator setted to empty space
result.innerHTML = names.join('');
