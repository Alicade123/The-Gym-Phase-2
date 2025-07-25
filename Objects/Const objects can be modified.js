const user = {
  name: "John",
};

user.name = "Pete"; // (*)

console.log(user.name); // Pete

// Const objects can be modified
// An important side effect of storing objects as references is that an object declared as const can be modified.

// For instance:

// const user = {
//   name: "John"
// };

// user.name = "Pete"; // (*)

// alert(user.name); // Pete
// It might seem that the line (*) would cause an error, but it does not. The value of user is constant, it must always reference the same object, but properties of that object are free to change.

// In other words, the const user gives an error only if we try to set user=... as a whole.

// That said, if we really need to make constant object properties, it’s also possible, but using totally different methods. We’ll mention that in the chapter Property flags and descriptors.
