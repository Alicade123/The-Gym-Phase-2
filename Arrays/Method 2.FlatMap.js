const arr = [1, 2, 1, 10, 10, 3, 2, 3];
const results = arr.flatMap((el, index, arr) =>
  el === 2 ? [2, 2, index] : [1, index]
);
console.log(results);

const special = arr.find(
  (element) => arr.indexOf(element) === arr.lastIndexOf(element)
);
console.log(special);
