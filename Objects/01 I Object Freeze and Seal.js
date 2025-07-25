//"use strict"; // throws error in strict mode or silent fails without strict mode
const user = {
  name: "Alicade",
};
Object.seal(user); //Apply the Freeze method

user.name = "Abiturije zed"; // You can Only modify the property of Sealed Object but not change structure

user.email = "abiturijee@gmail.com"; // you can not add new property to Sealed Object
delete user.name; // You can not delete the property of Sealed Object

console.log(user);
//check the property existence or not (Boolean)
console.log("name" in user);
console.log("age" in user);
// Check Lock Status
// You can verify the state with these handy methods: (Boolean)
console.log(Object.isFrozen(user));
console.log(Object.isSealed(user));
