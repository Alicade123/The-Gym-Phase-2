const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(digits);

console.log("\n");
for (let index = 0; index < digits.length; index++) {
  console.log(index);
}
console.log("\n");
for (const index in digits) {
  console.log(index);
}
console.log("\n");
for (const element of digits) {
  console.log(element);
}
console.log("\n");

digits.forEach((el) => console.log(el + "ForEach"));
