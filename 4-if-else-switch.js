// ЯКЩО-ТО

if (4 == 0){ // true
    console.log('вираз істинний')
}


if (4 == 0)
    console.log('вираз істинний')

if (4 == 4){ // true
    console.log('вираз істинний')
} else {
    console.log('вираз хибний')
}

let num = 20;

if(num < 6){
    console.log('less than 6');
} else if (num > 100){
    console.log('greater than 6');
} else {
    console.log('ok');
}

// (true) ? console.log("ok") : console.log('error')
let numb = 200;
(numb == 20) ? console.log("ok") : console.log('error')


// switch-case
let number = '49';

switch(number){
    case '49':
        console.log('49')
        break;
    case '50': 
        console.log('50')
        break;
    case '100':
        console.log('100')
        break;
    default: 
        console.log('This is default output')
        break; 
}