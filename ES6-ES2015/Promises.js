// // Example 1: synchronous
// function f1() {}
// function f2() {}
// function f3() {}

// f1();
// f2();
// f3();
// // Example 2: synchronous
// function f1() {
//   //Function definition
// }
// function f2() {
//   //Function definition
//   f1();
// }
// function f3() {
//   //Function definition
//   f2();
// }
// f3();

// Example 3: Async
function f1() {
  console.log("f1");
}
function f2() {
  console.log("f2");
}
function main() {
  console.log("main");

  setTimeout(f1, 0);

  f2();
}

main();
