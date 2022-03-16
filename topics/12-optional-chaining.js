'use strict';


const people = [
    {
        name:'Luka',
        locaton:{
            street: '20 Street'
        },
        timezone:{
            offset: '+4:00'
        }
    },
    {
        name:'Peter',
        locaton:{
            street: '220 Street'
        },
        timezone:{
            offset: '+1:00'
        }
    },
    {
        name:'John',
        locaton:{
            street: '250 Street'
        },
        timezone:{
            offset: '-3:00'
        }
    },
];

people.forEach((person)=>{
    // console.log(person,location.timezone.offset)
    // console.log(
    //     person.location &&
    //     person.locaton.timezone &&
    //     person.locaton.timezone.offset
    // )
    console.log(person?.locaton?.timezone?.offset || "Hello there!")
})