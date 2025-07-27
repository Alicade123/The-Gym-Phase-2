function argumentsObjects() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(argumentsObjects(10, 10, 2, 0));

//vs

const argms = (...params) => {
  return params.reduceRight((acc, currentValue) => acc + currentValue);
};
console.log(argms(10, 10, 2, 0));
