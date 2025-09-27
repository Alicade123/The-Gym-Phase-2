const redPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("red");
    // reject("Error:red");
  }, 1000);
});

const greenPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("green");
    reject("Error: green");
  }, 3000);
});

const bluePromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("blue");
    reject(new Error("blue promise is rejected at all"));
  }, 5000);
});

// Promise.all([redPromise, greenPromise, bluePromise]).then(function (colors) {
//   console.log(colors);
// });

// const allSettledPromise = Promise.allSettled([
//   redPromise,
//   greenPromise,
//   bluePromise,
// ]);

// async function caller() {
//   const colors = await allSettledPromise;
//   //   console.log(colors);
//   colors.forEach((color) => console.log(color));
// }
// caller();

// Promise.any([redPromise, greenPromise, bluePromise]).then(function (values) {
//   console.log(values);
// });

// Promise.race([redPromise, greenPromise, bluePromise]).then(function (values) {
//   console.log(values);
// });

// Promise.resolve(redPromise).then(function (values) {
//   console.log(values);
// });
// Promise.reject(bluePromise).catch(function (error) {
//   console.log(error);
// });
