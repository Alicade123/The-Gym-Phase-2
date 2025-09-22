function sum() {
  let total = 0;
  for (const x of arguments) {
    total += x;
  }
  return total;
}
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
