console.log(this === module.exports); //false
console.log(this === undefined); //false
console.log(this === global); //false
console.log(this); //{}

function sayHelloStrict() {
  "use strict";
  console.log(this);
}
sayHelloStrict(); // undefined

function sayHello() {
  //   "use strict";
  console.log(this);
}
sayHello(); //<ref *1> Object [global] {...
