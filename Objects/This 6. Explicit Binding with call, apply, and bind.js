function greet() {
  console.log(this.name);
}
const user = { name: "ABITURIJE" };

greet.call(user); // "ABITURIJE"
greet.apply(user); // "ABITURIJE"
const boundGreet = greet.bind(user);
boundGreet(); // "ABITURIJE"
