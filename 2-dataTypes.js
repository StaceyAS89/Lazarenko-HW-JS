/**
 * Прості типи даних (примітиви):
 * - Числа
 * - Текст
 * - Логічний тип (булевий)
 * - null (коли щось не існує / немає ніякого значення)
 * - undefined (коли щось існує, але являється пустим)
 * - Symbol
 * - BigInt
 * 
 * Обʼєкти:
 * Спеціальні обʼєкти (або Глобальні)
 * - Масиви
 * - Функції
 * - Обʼєкт дати
 * - Помилки
 * - Регулярні вирази
 * Звичайні обʼєкти:
 * - Обʼєкт {}
 */

// number
let number = 5;
let floatNum = 5.5;

// infinity
console.log(-4/0);

// NaN - not a number
console.log(3 * 'text');

// boolean

let isExist = true;
let isNotExist = false;

// null + undefined
let something;
console.log(something);

let value = null;
console.log(value)

let obj = {};

let person = {
    name: "Dmytro",
    age: 28,
    isMarried: true
};

console.log(person);
console.log(`Вік: ${person.age}`);
console.log(`Імʼя: ${person.name}`);
console.log(`Чи одружений: ${person.isMarried}`);

// `Вік: ${person.age}` - такий варіант запису є аналогом "конкатенації" і є більш лаконічним
let endpoint = '/help';
let baseUrl = 'some-url';

console.log(`https://${baseUrl}/${endpoint}`)

let person1 = new Object();
person1.name = "Fred";
person1.age = 42;
person1.isMarried = true;
console.log(person1)

// array

let arr = [];

let arr2 = ['text', 'some text', 6, 'asdad', {}, []];

console.log(arr2)

console.log(arr2[0]);
console.log(arr2[3]);

let numArr = [1, 2, 3];
let numObj = {a:1, b:2, c:3}

console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    Vlada: 2000
}

let salaryArr = ['Anna', 1000, 'Vlada', 2000];

let someArrObj = {
    0: 1,
    1: 2,
    2: 3
}

console.log(someArrObj[0])

let someArrObj2 = {
    a: 1,
    b: 2,
    c: 3
}

console.log(someArrObj2["a"]);


let someArrObj3 = {
    a: 1,
    b: 2,
    c: 3
}
someArrObj3.a = 9;
console.log(someArrObj3.a);


let someArrObj3 = {
    a: 1,
    b: 2,
    c: {
        name: "Dmytro",
        age: 28,
        isMarried: true
    },
    d: ['Anna', 1000, 'Vlada', 2000]
}

console.log(someArrObj3.c.age);
console.log(someArrObj3.d[2]);

// властивості та методи

let someText = " Hello world! ";

// console.log(someText.length); // довжина рядка
// console.log(someText.substring(1, 6)); // вирізати текст з 2 символа до 7
// console.log(someText.toUpperCase()); // зміна регістру
// console.log(someText.toLowerCase());// зміна регістру
// console.log(someText.indexOf('o'));
// console.log(someText.slice(1, 6));
// console.log(someText.trim());
console.log(someText.charAt(1));
console.log(someText[1]);

let myArr = [];

myArr.push("Hello");
myArr.push(" ");
myArr.push("world!");

// console.log(myArr)

// console.log(myArr[myArr.length - 2]);
// console.log(myArr.join(""));

console.log(myArr.pop())
console.log(myArr[myArr.length - 1]);


let someArrObj3 = {
    a: 1,
    b: 2,
    c: {
        name: "Dmytro",
        age: 28,
        isMarried: true
    },
    d: ['Anna', 1000, 'Vlada', 2000]
}
console.log(someArrObj3.c.name.length)

let someNum = "12.6 px";
let someNum2 = "12.6 px";
let someNum3 = 12;

//console.log(Math.round(someNum));

// console.log(someNum + someNum2);
console.log(parseInt(someNum) + someNum3);
console.log(parseFloat(someNum));

console.log('b' + 'a' + ('c' - 3) + 'a');