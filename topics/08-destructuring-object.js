'use strict';

// fast-easy way to access||unpack variables from arrays... objects


const luka = {
    firstName : 'Luka',
    lastName: 'Jioshvili',
    city: 'Tbilisi',
    siblings:{
        brother: 'Dato'
    },
};

// const firstName = luka.firstName;
// const lastName = luka.lastName;
// const brother = luka.siblings.brother

// const {firstName, lastName, city} = luka;

// firstName:saxeli using alias , can't acces original one
const {firstName:saxeli, lastName, city, siblings:{brother:dzma}} = luka;

console.log(saxeli, lastName, dzma);

// function printPerson(person){
//     // console.log(person.firstName);
//     const {firstName, lastName } = person;
//     console.log(firstName, lastName)
// }
function printPerson({firstName, lastName, city, siblings:{brother}}){
    // console.log(person.firstName);
    console.log(firstName, lastName, city, brother)
}
printPerson(luka);