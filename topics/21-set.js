'use strict';

// Set object - stores a collection of unique values of any type

// new Set()

// add(value)
// delete(value)
// clear()
// has(value)

// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

const dude = 'John';

unique.add('Luka');
unique.add('John');
unique.add('Luka');
unique.add(dude);
unique.add(31);
unique.add(13);

// const result = unique.delete(13);
// console.log(result);


const result = unique.delete(66)
// returns false cause no 66 in array
console.log(result);


// new Set() - accpets iterable objects 

const products = [
    {
        title: 'table',
        company: 'Ikea'
    },
    {
        title: 'chair',
        company: 'GGs'
    },
    {
        title: 'bench',
        company: 'Ikea'
    },
    {
        title: 'table',
        company: 'GSCD'
    },
]

// const companies = products.map((item)=> item.company);
// console.log(companies);

// const uniqueCompanies = new Set(companies)
// console.log(uniqueCompanies);

// const finalCompanies =  ['all', ...uniqueCompanies];
// console.log(finalCompanies);

const answer = ['all', ...new Set(products.map((item)=> item.company))];
console.log(answer)