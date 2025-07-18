// Write a function that takes in an array of strings,
// then reverses each string in that array and
// returns an array of the reversed versions of strings in descending order.

// input: ["apple", "banana", "cherry"]
// output: ["yrrehc", "elppa", "ananab"]

// input: ["hello", "world", "test"]
// output: ["tset", "olleh", "dlrow"]

// input: ["cat", "bat", "rat"]
// output: ["tar", "tab", "tac"]

// input: ["one", "two", "three", "four"]
// output: ["owt", "eerht", "ruof", "eno"]

const reverseSort = (arr) => {
  const reversedWords = arr.map((element) =>
    element.split("").reverse().join("")
  );
  //   return reversedWords.sort((a, b) => b.localeCompare(a));
  return reversedWords.sort().reverse();
};

console.log(reverseSort(["hello", "world", "test"]));
console.log(reverseSort(["cat", "bat", "rat"]));
console.log(reverseSort(["one", "two", "three", "four"]));

const words = ["Álvaro", "Zebra", "apple", "banana"];
console.log(...words).reverse();
