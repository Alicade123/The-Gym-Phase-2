let user = {
  name: "John",
  age: 30,
  isAdmin: true,
};
for (let key in user) {
  console.log(key);
}

console.log("\n");

for (let key2_prop in user) {
  console.log(user[key2_prop]);
}
