let a = 5;
let b = 3;
let c;

c = a + b;
console.log(c)

// ... some another code

a = 8;
b = 12;
c = a + b;

console.log(c);

function sum(a, b){
    let c = a + b;
    console.log(c);
}

sum(3, 10);
sum(3, 20);

let a1 = 10;
let b1 = 20;

sum(a1, b1);


function myFun(a, b){
    let c = a + b;

    return c;
}

console.log(myFun(3, 10));

function someName(a, b){
    let c = a + b;

    return c;
}

function (a, b){
    let c = a + b;

    return c;
}

const anonimFunc = function(a, b){
    let c = a + b;
    return c;
}

let a3 = "1";
let b3 = 2;
anonimFunc(a3, fun)

//() => {}

// it('qweqew', ()=> {

// })

(a, b) => {
    let c = a + b;
    console.log(c)
}

const arrowFunc = (a, b) => {
    let c = a + b;

    return c;
}

console.log(arrowFunc(1, 2))


const funcWithDefaultParams = (a, b = 3) => {
    return (a * b);
}

console.log(funcWithDefaultParams(2, 5));

const playWithReturn = () => {
    for(let i = 0; i < 10; i++){
        console.log(i);
        if(i === 6){
            return;
        }

        console.log('end')
    }
}

playWithReturn();


console.log(Date());

const myRequestWithDate = (field1, addedAt = Date()) => {

    // ...

    let requestBody = {
        someData: 1,
        someData2: 2,
        timestamp: ''
    };

    requestBody.someData = field1;
    requestBody.timestamp = addedAt;

    return requestBody;
}

console.log(myRequestWithDate('qwe qwe'))
console.log(myRequestWithDate('qwe qwe', true))



