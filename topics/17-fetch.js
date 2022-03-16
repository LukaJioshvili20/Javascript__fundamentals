'use strict';

// Fetch API - Browser API for HTTP (AJAX) requests
// Default - GET requess , supports methods as well
// Returns Promise 

const urlAPI = 'https://api.github.com/users/LukaJioshvili20/repos?per_page=100';

// console.log(fetch(urlAPI))

// dot way

// fetch(urlAPI)
//     .then((res)=> resp.json())
//     .then((data)=> console.log(data))
//     .catch((err)=> console.log(err))

// async way

// const getRepos = async ()=>{
//     try{
//         const res = await fetch(urlAPI);
//         const data = await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err)
//     }
// }

// getRepos();


// Fetch Errors
// only throws an error if cannot resolve
// error reposonse still is a response 
// error codes ( 400-500 )

const getRepos = async ()=>{
    try{
        const res = await fetch(urlAPI);

        // catches Network problem error, if url not working
        if(!res.ok){
            const msg = `There was an Error "${res.status} ${res.statusText}"`
            throw new Error(msg);
        }
        const data = await res.json();
        console.log(data);

    }catch(err){
        console.log(err)
    }
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', getRepos)