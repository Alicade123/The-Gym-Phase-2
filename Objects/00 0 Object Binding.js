//1. Implicity binding
//2. Explicity binding
//3. New binding
//4. Default binding

//1. Implicity binding
const person = {
  name: "Alicade",
  heyUser: function () {
    console.log(`Hello : ${this.name}`);
  },
};
person.heyUser();

//2. Explicity binding (out of person)
function sayName() {
  console.log(`My name is: ${this.name}`);
}
sayName.call(person);

//3. New binding
function Person(name) {
  this.name = name;
  this.seeInfo = function () {
    console.log(`User info : ${this.name}`);
  };
}

const P1 = new Person("Abiturije");
P1.seeInfo();

//4. Default binding
const user = {
  useThis: function () {
    console.log(this.name);
  },
};
user.useThis();

//order and Perecedence:
//1. New binding (Constructor and New Operator)
//2. Explicity binding (Using Call() where method is outside of object)
//3. Implicity binding (use This keyword inside object)
//4. Default binding (where this references to the global/window objects)
