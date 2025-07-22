const reduceUse = (getArray) => {
  console.log(getArray);
  return getArray.reduce(
    (accumulator, currentValue, currentIndex, getArray) => {
      console.log(
        `index: ${currentIndex} acc: ${accumulator} curerent-value: ${currentValue} `
      );
      return accumulator + currentValue;
    },
    10
  );
};
const arr = [1, 2, 1, 10, 10, 3, 2, 3];
console.log(reduceUse(arr));

const reduceRightUse = (getArray) => {
  console.log("\n", getArray);
  return getArray.reduceRight(
    (accumulator, currentValue, currentIndex, getArray) => {
      // console.log(
      //   `index: ${currentIndex} acc: ${accumulator} curerent-value: ${currentValue} `
      // );

      return accumulator - currentValue;
    }
  );
};
const arr2 = [1, -20, 2, 1, 10, 10, 3, 2, 3];
console.log(reduceRightUse(arr2));
