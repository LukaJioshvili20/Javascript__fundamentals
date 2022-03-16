'use strict';

// dot notation
const person = {
    name: 'Luka',
};

console.log(person.name);
person.age = 20
console.log(person);

// square bracket notation

const items = {
    "feature-items": ['item-01', 'item-02']
}
console.log(items['feature-items'])

let appState = 'Loading';
appState = 'Not Loading';
const keyName = 'Computer';
const app = {
    [appState]:true
};
// Not setting keyName equal to variable
// setting keyName to value
app[keyName] =  'Shawarma'

console.log(app)

const state = {
    loading:true,
    name: '',
    job: '',
}

function updateState(key, value) {
    state[key] = value;
}
// can update
updateState('name', 'Luka');
updateState('job', 'Developer');
updateState('loading', false);
// can add
updateState('age', 20)
console.log(state)