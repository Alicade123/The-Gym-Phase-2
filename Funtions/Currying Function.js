//regular function
function sum(a, b, c) {
  return a + b + c;
}

//Currying function
function a(x) {
  return function b(y) {
    return function c(z) {
      return x + y + z;
    };
  };
}

console.log(a(10)(20)(30));
console.log(sum(10, 20, 30));
