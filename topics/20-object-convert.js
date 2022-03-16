
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - convert both way

const person = {
    name: 'Luka',
    age:20,
    status:'Student'
};

const keys = Object.keys(person);
console.log(keys);

const values = Object.values(person);
console.log(values);


const entries = Object.entries(person);
console.log(entries);

// entries using map method

const newResult = entries.map((item)=>{
    const [first, second] = item;
    console.log(first, second);
    return first;
});
console.log(newResult);

// for of 
// for(const item of entries){
//     const [first, second] = item;
//     console.log(first, second);
// }

for(const [first, second] of entries){
    // const [first, second] = item;
    console.log(first, second);
}
