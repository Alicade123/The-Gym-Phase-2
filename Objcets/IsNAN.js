const notNumber = "19999";
let decision = Number.isNaN(notNumber);
console.log(decision); //false

const number = 19999;
decision = Number.isNaN(number);
console.log(decision); //flase

let sum;
sum += 50;
console.log(isNaN(sum));
console.log(Number.isNaN(sum));
