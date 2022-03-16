'use strict';

// async||await
// async must be present , always returns a promise
// await waits till the promis is done/settled
// error handling - try||catch block

// as a Reference

// const example = async () =>{
//     return 'Hello There !';
// }

// async function randomFunc(){
//     const result = await example();
//     console.log(result);
// };

// randomFunc();


const users = [
    {
        id:1,
        name:'Luka'
    },
    {
        id:2,
        name:'Susy'
    },
    {
        id:3,
        name:'Bobby'
    },
    {
        id:4,
        name:'Anna'
    }
];

const posts = [
    {
        userId: 1,
        posts: ['One','Two', 'Three']
    },
    {
        userId: 2,
        posts: ['Four', 'Five']
    },
    {
        userId: 3,
        posts: ['Six', 'Seven', 'Eight']
    },
    {
        userId: 4,
        posts: ['Nine']
    },
]

// getUser('Luka')
//     // .then((user)=>console.log(user))
//     .then((user)=> getPosts(user.id))
//     .then((posts)=> console.log(posts))
//     .catch((err)=>console.log(err));

const getData = async ()=>{
    try{
        const user = await getUser('Luka');
        const posts = await getPosts(user.id);
        console.log(posts)
    }catch(err){
        console.log(err)
    }
}    
getData();


function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.name === name);

        if(user){
            return resolve(user);
        }else{
            reject(`No user with the name: ${N}`);
        }
    });
};

function getPosts(userId){
    return new Promise((resolve, reject)=>{
        const userPosts = posts.find((user)=> user.userId === userId);

        if(userPosts){
            return resolve(userPosts.posts);
        }else{
            reject('Wrong ID');
        }
    });
};
