let user = {
  name: "John",
  age: 30,
};

let clone = {};
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
console.log(clone.name); // John
clone.name = "Alicade"; // changed the data in it
console.log(clone.name); // Alicade

console.log(user.name); // still John in the original object
