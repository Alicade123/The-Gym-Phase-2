// function Data(name, age, location) {
//   this.name = name;
//   this.age = age;
//   this.location = location;
// }

// const data1 = new Data("Alicade", 22, "Kigali");
// console.log(data1);
function makePizza([size = "medium", crust = "thin"] = []) {
  return [size, crust];
}
console.log(makePizza([]));
console.log(makePizza([undefined, "stuffered"]));
console.log(makePizza(["ok"]));
