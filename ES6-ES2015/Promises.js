// //Video1:https://www.youtube.com/watch?v=pIjfzjsoVw4&list=PLIJrr73KDmRyCanrlIS8PEOF0kPKgI8jN&t=2664s
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

// // Example 3: Async
// function f1() {
//   console.log("f1");
// }
// function f2() {
//   console.log("f2");
// }
// function main() {
//   console.log("main");
//   setTimeout(f1, 0);
//   f2();
// }
// main();

//Example 4: Async within Promise

// function f1() {
//   console.log("f1");
// }
// function f2() {
//   console.log("f2");
// }
// function main() {
//   console.log("main");
//   //web APIs
//   setTimeout(f1, 0);
//   //promise
//   new Promise(function (resolve, reject) {
//     resolve("I am the resolved promise! ");
//   }).then((results) => console.log(results));
//   //regular function
//   f2();
// }

// main();

//  // video2: https://www.youtube.com/watch?v=rdVG85LGsVE&list=PLIJrr73KDmRyCanrlIS8PEOF0kPKgI8jN

const promise = new Promise((resolve, reject) => {
  //   //Resolve
  //   const value = "water";
  //   resolve(value);
  //Reject
  reject(new Error("The Jack and Jill has fallen down on mountain"));
});

function grandParentCooking() {
  promise
    .then(function (result) {
      console.log(`The ${result} is available you're able to cook!!!`);
    })
    .catch(function (error) {
      console.log(`Opps: ${error.message}`);
    })
    .finally(() => console.log("Developed by : Alicade"));
}

grandParentCooking();
