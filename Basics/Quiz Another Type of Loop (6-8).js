var test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];

// test.forEach((el) => console.log(el % 3 === 0 ? el + 100 : el));
test.forEach((el) => {
  if (el % 3 === 0) console.log(el + 100);
  else console.log("Element " + el + " is not divisible by 3");
});
