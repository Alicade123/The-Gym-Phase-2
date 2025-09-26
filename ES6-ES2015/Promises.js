// // Example 1: synchronous
// function f1() {}
// function f2() {}
// function f3() {}

// f1();
// f2();
// f3();
// Example 2: synchronous
function f1() {
  //Function definition
}
function f2() {
  //Function definition
  f1();
}
function f3() {
  //Function definition
  f2();
}
f3();
