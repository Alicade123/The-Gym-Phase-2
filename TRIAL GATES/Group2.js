const reverseSort = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i].split("").reverse().join(""));
  }
  return results.sort((a, b) => b.localeCompare(a));
};
// console.log(reverseSort(["hello", "world", "test"]));
// console.log(reverseSort(["cat", "bat", "rat"]));
console.log(reverseSort(["one", "two", "three", "four"]));

const revSort = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(arr[i].split("").reverse().join(""));
  }
  return results.sort().reverse();
};
// console.log(revSort(["hello", "world", "test"]));
// console.log(revSort(["cat", "bat", "rat"]));
console.log(revSort(["one", "two", "three", "four"]));
