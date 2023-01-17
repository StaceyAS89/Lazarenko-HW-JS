// 1. Ви прийшли в Макдональдз з трьома друзями.
// Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
// Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
// то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
// то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

let hamburgeres = 5;
let fries = 1;

if (hamburgeres>=4&& fries >=1) {
    console.log("Ми поїли")
} else {
    console.log("Ми йдемо в інше кафе")
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.
let priceProduct  = 1900;
if (1000 <= priceProduct&&priceProduct <= 1900) {
console.log(priceProduct)
}
else {
    console.log("The number is not in the range of 1000 - 1900")

}

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.
let seasonNumber = 2;
if (seasonNumber == 1) {
console.log("Winter")
} else if (seasonNumber == 2) {
    console.log("Spring")
} else if(seasonNumber == 3) {
    console.log("Summer")
} else if (seasonNumber == 4) {
    console.log("Autumn")
} else {
    console.log("This is no a season's number")
};

// 5. Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
//     (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
//     Використати вкладені оператори if
//     Результат виводити в консоль.

let aNumber = 5;
let bNumber = 30;
let cNumber = 5;

if (aNumber > bNumber&&aNumber < cNumber||aNumber < bNumber&&aNumber > cNumber) {
    console.log("aNumber is a average number")
} else if (bNumber>aNumber&&bNumber<cNumber||bNumber<aNumber&&bNumber>cNumber) {
    console.log("bNumber is a average number")
} else if (cNumber>aNumber&&cNumber<bNumber||cNumber<aNumber&&cNumber>cNumber) {
    console.log("cNumber is a average number")
} else if (aNumber==bNumber||aNumber==cNumber||bNumber==cNumber) {
    console.log("Variables contain equal numbers")
} else {
    console.log("Something went wrong!!!")
}

// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.
let weekDay = 3;
switch (weekDay) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("This is a not season's number!");  
} 

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.
let operandNumber1 = 10;
let operandNumber2 = 100;
let operatorSign = "/";

switch(operatorSign) {
    case "+":
        console.log(operandNumber1 + operandNumber2);
        break;
    case "-":
        console.log(operandNumber1 - operandNumber2);
        break;
    case "*":
        console.log(operandNumber1 * operandNumber2);
        break;
    case "/":
        console.log(operandNumber1 / operandNumber2);
        break    
    default:
        console.log("This is incorrect operatorSign");         
}

// 8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.
let str = 'My vErY best wishing';
const noVowels = str.replace(/[aeiouy]/gi, '');
console.log(noVowels); // 



// 9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закнченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

//     Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
let metrNum = "5001";
let kmNum = Number(metrNum)/1000;


if ( /1$/.test(metrNum) ) {
    console.log(`${metrNum} метр це ${kmNum} кілометра`)
} else if (/2$/.test(metrNum)||/3$/.test(metrNum)||/4$/.test(metrNum)) {
    console.log(`${metrNum} метра це ${kmNum} кілометра`)
} 
else if (/1000$/.test(metrNum)) {
    console.log(`${metrNum} метрів це ${kmNum} кілометр`)
} 
else if (/5000$/.test(metrNum)||/6000$/.test(metrNum)||/7000$/.test(metrNum)||/8000$/.test(metrNum)||/5000$/.test(metrNum)||/10000$/.test(metrNum)) {
    console.log(`${metrNum} метрів це ${kmNum} кілометрів`)
}
else if (/5$/.test(metrNum)||/6$/.test(metrNum)||/7$/.test(metrNum)||/8$/.test(metrNum)||/9$/.test(metrNum)||/0$/.test(metrNum)
||/10$/.test(metrNum)||/20$/.test(metrNum)||/30$/.test(metrNum)||/40$/.test(metrNum)||/50$/.test(metrNum)||/60$/.test(metrNum)
||/70$/.test(metrNum)||/80$/.test(metrNum)||/90$/.test(metrNum)||/100$/.test(metrNum)) {
    console.log(`${metrNum} метрів це ${kmNum} кілометра`)
} else {
    console.log("This isn't a number!!!")
}