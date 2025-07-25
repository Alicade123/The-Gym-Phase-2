const id = Symbol("MyId");
const user = {
  name: "Alicade",
  userName: "Alicatra",
  [id]: 22,
};

user.email = "abiturijee@gmail.com";

console.log(user);
