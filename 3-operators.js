// +

console.log('qwe' + '123')

console.log(111 + 123)

console.log(2 + '123')

console.log(2 + + '123')

// інкремент та декремент

let incr = 10;
let decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// ++incr;
// --decr;
// console.log(incr);
// console.log(decr);

console.log(incr++);
console.log(decr--);


// < >
console.log(5 < 2);
console.log(5 > 2);

console.log(5%2);

// =, ==, ===

//console.log(2*4 = 8);
console.log(2*4 == 8);
console.log(2*4 == '8');

console.log(2*4 === 8);
console.log(2*4 === '8');

// && - і - дає true тільки тоді коли обидві змінні будуть true
// || - або - дає false тільки тоді коли обидві змінні будуть false

let isChecked = false;
let isClosed = false;

// console.log(isChecked && isClosed);
// console.log(isChecked || isClosed);

// ! - перетворює true на false (і навпаки)

// console.log(!isChecked && isClosed);
console.log(!isChecked || isClosed);


// я хочу купити гамбургер та картоплю, якщо обидва товари є у наявності я їх купую і буду ситим.

let hamburger = true;
let friess = true;

if(hamburger && friess){
    console.log('я наївся')
}

console.log(hamburger && friess)


let hamburger2 = 5;
let fries2 = 0; // 0, null, undefined, "", NaN - завжди будуть false

if(hamburger2 && fries2){
    console.log('я наївся')
}

console.log(hamburger2 && fries2)


let hamburgers = 2;
let cola = 2;
let nuggets = 2;
let fries3 = 2;

if((hamburgers >= 2 && cola > 0) || (nuggets > 1 && fries3 > 1)){
    console.log("всі наїлися")
}


