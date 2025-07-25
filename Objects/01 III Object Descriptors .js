const id = Symbol("Personal_id");
function Person(name) {
  this.names = name;
  this.address = "Kigali";
}

const person1 = new Person("Alicade");
person1[id] = 123;
Object.defineProperty(person1, "age", {
  value: 42,
  writable: true,
});
// for (let proper in person1) {
//   console.log(proper);
// }
// console.log(person1);
//console.log(Object.getOwnPropertyDescriptors(person1)); //static method returns all own property descriptors of a given object.
//console.log(Object.getOwnPropertyDescriptor(person1, "age")); //static method returns an object describing the configuration of a specific property on a given object
//console.log(Object.getOwnPropertyNames(person1)); //static method returns an array of all properties (including non-enumerable properties except for those which use Symbol)
console.log(Object.getOwnPropertySymbols(person1));
