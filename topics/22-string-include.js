'use strict';

// String includes() - checks if a string contains another string

const products = [
    {
        title: 'Big table',
        company: 'Ikea'
    },
    {
        title: 'Blue chair',
        company: 'GGs'
    },
    {
        title: 'Long bench',
        company: 'Ikea'
    },
    {
        title: 'Blue table',
        company: 'GSCD'
    },
];

const textSearch = 'a';

const newProducts = products.filter((product)=>{
    product.title.toLowerCase().includes(textSearch);
})

console.log(newProducts);
