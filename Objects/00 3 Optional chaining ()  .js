const user = {
  name: "Username",
  address: { street: "KK289st" },
};

//Not recommende Approaches
// console.log(user.address.street);
// console.log(user.address ? user.address.street : undefined);
// console.log(user.address && user.address.street && user.address.street.name);

//Recommandation and best practice
console.log(user); //obj
console.log(user?.address); //obj.inner-Obj
console.log(user?.address?.street); //inner-Obj.street property
console.log(user?.address?.street?.name); //undefined because the name property doesn't exists!
console.log("name" in user); //true
console.log("age" in user); //false

//Ex2
const user100 = null;
console.log(user100); //null
console.log(user100?.name); //undefined because the name property doesn't exists!
console.log(user100?.address?.street); //undefined because the name property doesn't exists!
