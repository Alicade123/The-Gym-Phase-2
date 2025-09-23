const bowl1 = {
  banana: { color: "yellow", wieght: 12.2 },
  orange: { color: "orangw", wieght: 9.2 },
  apple: { color: "green", wieght: 17.2 },
  banana: { color: "green", wieght: 15.3 },
};

const bowl2Symbols = {
  [Symbol("banana")]: { color: "yellow", wieght: 12.2 },
  [Symbol("orange")]: { color: "orangw", wieght: 9.2 },
  [Symbol("apple")]: { color: "green", wieght: 17.2 },
  [Symbol("banana")]: { color: "green", wieght: 15.3 },
};
// console.log(bowl1);
// console.log(bowl2Symbols);

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const iteratorDigits = digits[Symbol.iterator]();
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
console.log(iteratorDigits.next());
