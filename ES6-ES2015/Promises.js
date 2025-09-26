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

// //Example5: Promise and handler methods
// const promise = new Promise((resolve, reject) => {
//   //   //Resolve
//   //   const value = "water";
//   //   resolve(value);
//   //Reject
//   reject(new Error("The Jack and Jill has fallen down on mountain"));
// });

// function grandParentCooking() {
//   promise
//     .then(function (result) {
//       console.log(`The ${result} is available you're able to cook!!!`);
//     })
//     .catch(function (error) {
//       console.log(`Opps: ${error.message}`);
//     })
//     .finally(() => console.log("Developed by : Alicade"));
// }

// grandParentCooking();

//Video 3: https://www.youtube.com/watch?v=AUCavCH7FTw&list=PLIJrr73KDmRyCanrlIS8PEOF0kPKgI8jN&t=800s
// Example 6: Callback Fn

// function orderPizza(flavor, type, callback) {
//   console.log(`The ${flavor} ${type} is ordered`);

//   setTimeout(function () {
//     const msg = `The ${flavor} ${type} is ready`;
//     // console.log(msg);
//     callback(msg);
//   }, 3000);
// }

// orderPizza("Margherita", "Greekpizza", function (msg) {
//   console.log(msg);
// });

//video 4: https://www.youtube.com/watch?v=54dnv1ha3sw&list=PLIJrr73KDmRyCanrlIS8PEOF0kPKgI8jN&t=2s
//Example 7: Promise Chaining

// // 3 implementation that you can perform inside then() method
// const getUserPromise = new Promise(function (resolove, reject) {
//   const user = {
//     name: "Alicade ABITURIJE",
//     email: "abiturije1alicade@gmail.com",
//     password: "wordpass",
//     company: "The Gym",
//     permissions: ["Admin", "hr", "dev"],
//   };
//   resolove(user);
// });

// getUserPromise
//   .then((user) => {
//     console.log(user.name);
//     //1. Return another promise inside then()
//     return new Promise(function (resolve, reject) {
//       setTimeout(function () {
//         resolve("Kigali - Rwanda");
//       }, 2000);
//     });
//     //2. Retrun synchronous value inside then()
//     return user.email;
//     // 3. Throw error inside then()
//     if (user.permissions.includes("hr")) throw new Error("You're not allowed");
//   })

//   .then(function (address) {
//     console.log(`The user address is ${address}`);
//   })
//   //   .then(function (email) {
//   //     console.log(`The user email is ${email}`);
//   //   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// //Real promise chainig

// const number = new Promise((resolve, reject) => {
//   resolve(10);
// });

// number
//   .then((value) => {
//     value++;
//     return value;
//   })
//   .then((value2) => {
//     value2 = value2 + 10;
//     return value2;
//   })
//   .then((value3) => {
//     value3 = value3 + 20;
//     console.log(value3);
//   });

//the finally() demo
// const promiseZ = new Promise(function (resolve, reject) {
//   resolve("Testing the finally");
//   const user = "alicade";
// })
//   .finally(function () {
//     console.log("Cleaned Up!!!");
//   })
//   .then(function (resolve) {
//     console.log(resolve);
//   });

//video5 : https://www.youtube.com/watch?v=CP0CqAkY-Zs&list=PLIJrr73KDmRyCanrlIS8PEOF0kPKgI8jN&t=1s
//Async & await

//example 8:
async function userInfo(name, email, telephone) {
  return [name, email, telephone];
}

async function caller() {
  const user1 = {
    name: "Alicade",
    email: "abiturije1alicade@gmail.com",
    tel: "+250782583016",
  };
  const user2 = {
    name: "Ange",
    email: "angee@gmail.com",
    tel: "+250789052944",
  };
  const msg = await userInfo(user1.name, user1.email, user1.tel);
  const msg2 = await userInfo(user2.name, user2.email, user2.tel);
  console.log(msg);
  console.log(msg2);
}
caller();
// //example 9: Async , await try & catch

// const validateUser = ({ userId, password }) => {
//   return new Promise((resolve, reject) => {
//     if (userId && password) {
//       resolve("You're authenticated!!!");
//     } else {
//       reject(new Error("Missing userId or password"));
//     }
//   });
// };

// const app = async () => {
//   const data = {
//     userId: "22RP07269",
//     password: "12345",
//   };
//   try {
//     const results = await validateUser(data);
//     console.log(results);
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Developed by Alicade");
//   }
// };

// app();
