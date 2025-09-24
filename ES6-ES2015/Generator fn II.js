function* udacity() {
  yield "Richard";
  yield "James";
}

const udacityIterator = udacity();
console.log(udacityIterator.next().value);
console.log(udacityIterator.next().value);
console.log(udacityIterator.next().value);
