function Person(fName, Lname) {
  this.fName = fName;
  this.Lname = Lname;
}

const person1 = new Person("Alicade", "Dusabe");
const person2 = new Person("Raissa", "Ihirwe");

// person1.getFullName = function () {
//   return `${this.fName} ${this.Lname}`;
// };

// console.log(person1.getFullName());
// console.log(person2.getFullName()); // will throw error //proplem here

//solution
Person.prototype.getFullName = function () {
  return `${this.fName} ${this.Lname}`;
};
console.log(person1.getFullName());
console.log(person2.getFullName());
