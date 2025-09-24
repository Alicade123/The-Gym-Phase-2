function* displayResponse() {
  const name = yield;
  console.log(`The response is: ${name}`);
  const response = yield;

  console.log(`The response is: ${name} and ${response}`);
}
const displayResponseIterator = displayResponse();
displayResponseIterator.next();
displayResponseIterator.next("Alicade");
displayResponseIterator.next("Hello Udacity Student!");
