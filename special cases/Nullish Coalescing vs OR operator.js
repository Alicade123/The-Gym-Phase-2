let userName = null;
let defaultName = "Guest";

let displayUserName = userName ?? defaultName; // "Guest"
console.log(displayUserName);

const age = 0;
const defaultage = 18;

const ageUsingOR = age || defaultage; //18 b3cause the 0 is falsy for "||"
console.log(ageUsingOR);

const ageUsingNullish = age ?? defaultage; //0 because the 0 is not null / undefined for "??"
console.log(ageUsingNullish);
