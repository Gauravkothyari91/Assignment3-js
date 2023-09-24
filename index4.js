const Example = {
    name: 'Gaurav',
    age: 24,
    color: 'white',
};

console.log(Example.hasOwnProperty('age'));
// output  :  true
console.log(Example.hasOwnProperty('class'));
// output   :   false