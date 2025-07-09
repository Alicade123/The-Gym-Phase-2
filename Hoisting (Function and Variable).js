sayHi("Alicade");

function sayHi(name) {
  //greating variable is being hoisted here but still un defined becouse it is not initialized
  console.log(greeting + " " + name);
  var greeting;
}

console.log(findMeResult(5, 7)); //the function declaration is being hoisted at the top of invokation

function findMeResult(x, y) {
  return x * y;
}
