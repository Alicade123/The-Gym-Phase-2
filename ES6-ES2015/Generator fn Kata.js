function* multiplicationGenerator(a) {
  let b = 1;
  while (true) {
    yield `${a} x ${b} = ${a * b}`;
    b++;
  }
}

// Example usage:
const gen = multiplicationGenerator(7);
console.log(gen.next().value); // Repeat as needed
console.log(gen.next().value);
