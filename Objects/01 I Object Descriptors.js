// Object.defineProperty(Obj, "key", {
//   value: "data/value",
//   writable: true, //Boolean either true or false
//   configurable: true, //Boolean either true or false
//   enumerable: true, //Boolean either true or false
// });
const id = Symbol("id");
const user = {
  name: "Alicade",
  age: 23,
  [id]: 123,
};

//writable
Object.defineProperty(user, "name", {
  value: "Alicade Zed",
  writable: false,
});
user.name = "Abiturije"; // doesn't work property is unWritable
console.log(user); //Object.entries(user)

//configurable
Object.defineProperty(user, "age", {
  value: 25,
  configurable: false,
  writable: false,
});
delete user.age;
user.age = 100;
console.log(user);

//enumerable
Object.defineProperty(user, id, {
  value: 111,
  enumerable: false,
});

console.log(user);

console.log("\n");
// console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]
// console.log(user[Object.getOwnPropertySymbols(user)[0]]); // 111
// console.log(Object.getOwnPropertyDescriptor(user, "name"));
console.log(Object.hasOwnProperty("namekgl"));
