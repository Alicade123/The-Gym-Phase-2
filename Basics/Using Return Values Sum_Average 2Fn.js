const sum = (num1, num2) => {
  return num1 + num2;
};
const divide = (number) => {
  return number / 2;
};
const resultSum = sum(5, 7);
const average = divide(resultSum);
console.log(
  `The Numbers are 5 and 7 sum is : ${resultSum}, and average is : ${average.toFixed(
    2
  )}`
);
