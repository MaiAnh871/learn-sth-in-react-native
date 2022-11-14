const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ['Sport', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// console.log(person);
// person.greet();


/*
for (let hobby of hobbies) {
    console.log(hobby);
}
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);


// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];
console.log(copiedArray);

const copiedPerson = {...person};
console.log(copiedPerson);


const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray (1, 2, 3));


const toArray = (...args) => {
    return args;
};

console.log(toArray (1, 2, 3, 4));
*/


