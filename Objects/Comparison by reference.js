//For instance, here a and b reference the same object, thus they are equal:
let a = {};
let b = a; // copy the reference
console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

//And here two independent objects are not equal, even though they look alike (both are empty):
let x = {};
let y = {}; // two independent objects

console.log(x == y); // false
