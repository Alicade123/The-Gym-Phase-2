const user = { name: "ABITURIJE", age: 25, skills: ["JavaScript", "HTML"] };
const jsonString = JSON.stringify(user, null, 2); //JSON.stringify(value, replacer, space)
console.log(jsonString);

const userString =
  '{"name":"ABITURIJE","age":25,"skills":["JavaScript","HTML"]}';
const userObject = JSON.parse(jsonString); //JSON.parse(Text, reviver);
console.log(userObject);

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2023,
  color: "Silver",
  ownner: {
    name: "Alicade Mehra",
    age: 23,
    address: {
      city: "Kigali",
      country: "Rwanda",
      road: "Kicukiro Main Road",
    },
  },
  start: function () {
    console.log("The engine is starting.");
  },
  drive: function () {
    console.log("The car is driving.");
  },
};
console.log(car?.ownner?.address?.road?.streatNumber); // This will return the undefined instead of throw Error

const x = null;
let y;
const t = false;
const z = 0;

console.log(x ?? y ?? t ?? z); //false
console.log(x || y || t || z); //null
