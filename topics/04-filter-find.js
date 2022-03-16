'use strict';
// Filter - returns a new array
// can manipulate the size of the new array ( unlike map method)
// returns based on our condition

// Find - returns single instance ( object )
// returns the first match , if no match - undefined

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

const colors = ['red', 'green', 'blue',]

// Filter
const youngPeople = people.filter((person)=>{
    // Custome conditon
    // if(person.age <= 25){
    //     return person;
    // }
    return person.age <= 25;
});

console.log(youngPeople);
const frontEnd = people.filter((person)=> person.positon === 'Front-end Developer');
console.log(frontEnd)

// When No Match ( filter )
const devOps = people.filter((person)=> person.positon === 'DevOps');
// empty array when no match
console.log(devOps);

// Find 
const luka = people.find((person)=> person.name === 'Luka')
const color = colors.find((color) => color === 'blue');
// result is single instance 
console.log(color);

// When no Match ( find )
const oldPerson = people.find((person)=> person.age >= 65);
// result is undefined when not found
console.log(oldPerson);

// multiple matched - the first match
const random = people.find((person)=> person.age > 22)
console.log(random)

// Can use filter instead of Find 

const peter = people.filter((person)=> person.name === 'Peter');
// can not access cause it is array
console.log(peter.positon);
// can access though the array
console.log(peter[0].positon)