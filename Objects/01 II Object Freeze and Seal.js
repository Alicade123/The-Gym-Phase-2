// "use strict"; //throws error in strict mode or silent fails without strict mode
const user = {
  name: "Alicade",
};
Object.freeze(user); //Apply the Freeze method
user.age = 23; //You can not add property to frozen object
user.email = "abiturijee@gmail.com"; // you can not add new property to frozen Object
user.name = "Abiturije zed"; // You can not modify the property of frozen object
delete user.age; // You can not delete the property of frozen object

console.log(user);
console.log("name" in user); //check the property existence or not
console.log("age" in user);

console.log(Object.isFrozen(user)); // → true or false
console.log(Object.isSealed(user)); // → true or false
