let firstName = null;
let lastName;
let nickName = "Supercoder";

let userName = firstName ?? lastName ?? nickName;
console.log(userName);

let userNameOR = firstName || lastName || nickName;
console.log(userNameOR);

const number = 1000;
console.log(number <= 100 && "The number is big but not enough");
