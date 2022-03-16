'use strict';

// Reduce - Advanced


// Cart
const cart = [
    {
        title: 'RTX 2060 Super',
        price: 700.30,
        amount: 4,
    },
    {
        title: 'RTX 3080 OC',
        price: 1300,
        amount: 2,
    },
    {
        title: 'TITAN X',
        price: 1500,
        amount: 1,
    },        
];

let {totalItems, cartTotal}  = cart.reduce(
    (total, cartItem) =>{
    // desctricture item 
    const {amount, price}  = cartItem;
    // count items
    total.totalItems += amount; 
    // count sum
    total.cartTotal += amount * price;

    return total
    }, 
    {
    totalItems : 0,
    cartTotal : 0
    }
)
// converting string to floatng number
cartTotal = parseFloat( cartTotal.toFixed(2) );

console.log(totalItems, cartTotal)
// GitHub Repos

const url = 'https://api.github.com/users/LukaJioshvili20/repos?per_page=100'

const fetchRepos = async ()=>{
    const res = await fetch(url);
    const data = await res.json();

    const newData = data.reduce((total, repo)=>{
        const { language } = repo;
        // if(total[language]){
        //     total[language] = total[language] + 1;
        // }else{
        //     total[language] = 1;
        // }
        

        // Removes Null result
        if(language){
            total[language] = total[language] + 1 || 1;
        }
        return total;
    },{

    })
    console.log(newData)
}

fetchRepos();