'use strict';

// Split into single items and Copy them

const udemy = 'udemy';

const boys = ['Luka', 'John', 'Peter', 'George']
const girls = ['Susan', 'Anna', 'Julie']
// string to char array
const letter = [...udemy]
console.log(letter);

const bestFriend = 'Joe Byron';

const friends = [...boys, bestFriend, ...girls]; 
console.log(friends)

// reference
// const newFriends = friends;
// copy
const newFriends = [...friends];

newFriends[0] = 'Nancy'
console.log(friends);
console.log(newFriends)
// copy

// ES2018 (ES8)

const person =   {
    name: 'Luka',
    age: 20,
    positon: 'Front-end Developer'    
}

const newPerson = {...person,city:'Tbilisi',salary:200,age:21}
console.log(person);
console.log(newPerson);