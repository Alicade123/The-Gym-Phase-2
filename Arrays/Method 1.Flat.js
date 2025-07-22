const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat()); // expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat()); // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2)); // expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(10));
console.log(arr2.flat(Infinity)); // expected output: Array [0, 1, 2, 3, 4, 5]

// Using flat() on sparse arrays
// The flat() method removes empty slots in arrays:
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", empty, "e"], null ]
console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]
