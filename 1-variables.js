let number = 5;
const userScore = 2000;

// camelCase - змінні
// snake_case - змінні
// UPPER_SNAKE_CASE - константи
// kebab-case - назва директорій
// PascalCase - назви класів

// number / Number / nUMber / ...

let number1 = 5;
console.log(number1);

// прямих констант в JS не існує

let number2 = 5;
let userScore2 = 2000;

//number2 = 10;
//console.log(number2);

userScore2 = 10;
console.log(userScore2);

const obj = {
    age: 20
};

obj.age = 44;
console.log(obj);

var oldVariable = 'Dima';
oldVariable = 'Vanya';
console.log(oldVariable);

// var існує в памʼяті до того як був обьявлений в коді
console.log(firstName)
var firstName = 'someName'


// область видимості змінних var і let відрізняється
{
    let result = 50;
}

console.log(result);

{
    var result1 = 50;
}

console.log(result1);

alert(5);
[].push('1');

// variables naming

let a = 3000;
let b = 2000;

// 100 code lines

console.log('Ширина авто: ' + a + ' довжина: ' + b);

let width = 3000;
let length1 = 2000;

console.log('Ширина авто: ' + width + ' довжина: ' + length);

let vechileBodyWigth = 3000;
let vechileBodyLength = 2000;

// same codestyle

let carBodyWigth = 3000;
let machineBodyLength = 2000;