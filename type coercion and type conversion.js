console.log(Number("12345"));
console.log(parseInt("123.456"));
console.log(parseFloat("129.009"));


console.log("5" + 1); //"5" + 1 → "51" (number 1 is coerced into a string)
console.log("5" - 1); // "5" - 1 → 4 (string "5" is coerced into a number)
console.log(true + 2); // true + 2 → 3 (boolean true becomes 1)
console.log(null + 1);

console.log("5" == 5); //  == allows coercion: "5" == 5 → true
console.log("5" === 5); // === avoids coercion: "5" === 5 → false

console.log([] + {}); // {}
console.log({} + []); // {}
console.log(null == undefined); // true
console.log([] == 0); // true
/*
Developer
Since you're diving deep into Node.js and backend logic, always prefer explicit conversion to keep your code predictable and bug-free. Use === instead of == unless you really know what you're doing.

*/
