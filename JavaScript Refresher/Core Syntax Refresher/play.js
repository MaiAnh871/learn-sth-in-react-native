var name = 'Max';
var age = 29;
var hasHobbies = true;

// console.log(name);

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' + userName +
        ', age is ' + userAge + 
        ' and the user has hobbies: ' + userHasHobbies
    );
}

console.log(summarizeUser(name, age, hasHobbies));
