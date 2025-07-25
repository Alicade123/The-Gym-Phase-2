let user = {
  name: "John",
  age: 30,
  address: {
    street: "KK658st",
    cordinates: this.location ?? "Unknown",
  },
};
console.log(user);
console.log("\n" + "... Spread Operator");
//...Spread operator (Shallow Copy = Reference in Memory)
const object1 = {
  ...user,
};
console.log(object1);

console.log("\n" + "Obj.Assign Method");
//Object.assign Method (Shallow Copy =Reference in Memory)
const object2 = Object.assign({}, user);
object2.address.cordinates = "Musanze";
console.log(object2);
console.log(user);

//Json.toStringfy Method (Deep Copy)
const object3 = JSON.parse(JSON.stringify(user));
object3.address.cordinates = "Kigali";
console.log("\n" + "//Json.toStringfy Method");
console.log(object3);
console.log(user);

//StructuredClone Method (Deep Copy)
console.log("\n" + "//structuredClone");
const object4 = structuredClone(user);
console.log(object4);
