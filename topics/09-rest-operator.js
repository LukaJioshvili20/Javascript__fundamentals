'use strict';
// Rest Operator ...
// gathers||collects items
// destructuring , functions
// placement IMPORTANT 
// rest when declare function , spread when invoke the function


// arrays
const colors = ['red', 'green', 'blue', 'white', 'black']
const [first, ...restOfTheColors] = colors;
// Removes first element than prints
console.log(first,...restOfTheColors);

const certainColor = restOfTheColors.find((color)=> color === 'black')
console.log(certainColor)

// objects
const person = {
    name: 'Luka',
    age: 20,
    positon: 'Front-end Developer'    
}

// const  {...rest,name } = person; Mistake 
const  { name,...rest } = person;
console.log(name,rest);
// function

const getAverage = (name, ...scores)=>{
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item)=>{
        return total += item;
    },0) / scores.length;
    console.log(average);
}

// getAverage(person.name,32,54,78,97)
const testScores = [32,54,78,97]
getAverage(person.name,...testScores)
