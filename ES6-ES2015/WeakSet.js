// let id = Symbol("id");
// id = 1;
let person1 = { name: "alicade" };
let person2 = { name: "aline" };
let person3 = { name: "alice" };
let person4 = { name: "alite" };
let person5 = { name: "anne" };

const student = new WeakSet([person1, person2, person3, person4, person5]);
console.log(student); //WeakSet { <items unknown> }
console.log(student.has(person4)); //true

const uniqueFlavors = new WeakSet([]);
const flavor1 = { flavor: "chocolate" };
const flavor2 = { flavor: "milkshake" };
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors.has(flavor1));
