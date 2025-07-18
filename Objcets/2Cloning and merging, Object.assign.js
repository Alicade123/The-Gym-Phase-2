/*
Object.assign(dest, ...sources)
The first argument dest is a target object.
Further arguments is a list of source objects.
It copies the properties of all source objects into the target dest, and then returns it as the result.

For example, we have user object, let’s add a couple of permissions to it:
*/
let user = {
  name: "John",
  age: 30,
};
let permission1 = { canView: true };
let permission2 = { canEdit: true };
Object.assign(user, permission1, permission2);
console.log(Object.entries(user));

//If the copied property name already exists, it gets overwritten:

let user2 = { name: "John" };
Object.assign(user2, { name: "Pete" });
console.log(user2.name); // now user2 = { name: "Pete" }

//We also can use Object.assign to perform a simple object cloning:
let clone = Object.assign({}, user);
console.log(Object.entries(clone));
