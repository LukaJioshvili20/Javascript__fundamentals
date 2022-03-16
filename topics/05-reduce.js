'use strict';

// Reduce - Basics  
// iterates, callback function
// reduces to a single value - number , array, object 
// 1st parramter ('acc') - total of all calculations
// 2n parrmater ('curr') - current itration/value

const people = [
    {
        name: 'Luka',
        age: 20,
        positon: 'Front-end Developer',
        salary: 100,
    },
    {
        name: 'Peter',
        age: 28,
        positon: 'Full-stack Developer',
        salary: 800,
    },
    {
        name: 'John',
        age: 23,
        positon: 'Back-end Developer',
        salary: 300,
    }

];
const dailyTotal = people.reduce((total, person)=>{
    // IMPORTANT return total always
    // console.log(total);
    // console.log(person.salary);
    total += person.salary;
    return total;
}, 0)

console.log(dailyTotal)