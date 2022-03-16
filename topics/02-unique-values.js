'use strict';
// Unique Values
// map - get all instances 
// new Set - narrow down 
// ['all', ...] - turn it back to array 

const menu = [
    {
        name: 'Pancakes',
        category : 'Breakfast'
    },
    {
        name: 'Burger',
        category : 'Lunch'
    },
    {
        name: 'Steak',
        category : 'Dinner'
    },
    {
        name: 'Bacon',
        category : 'Breakfast'
    },
    {
        name: 'Eggs',
        category : 'Breakfast'
    },
];

const categories = ['All', ... new Set(menu.map((item)=> item.category ))];
console.log(categories)

const result = document.querySelector('#result')
result.innerHTML = categories
    .map((category)=>{
        return `<button>${category}</button>`
    })
    .join('')