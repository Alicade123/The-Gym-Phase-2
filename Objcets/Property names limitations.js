let obj = {
  for: 12,
  let: 10,
  return: 8,
};
console.log(obj.for + obj.let + obj.return);

let obj2 = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj2["0"]); // test
console.log(obj2[0]); // test (same property)
