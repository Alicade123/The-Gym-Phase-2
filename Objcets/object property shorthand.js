const userName = "Alicade";
const age = 23;
const location = "Kicukiro Kigali Rwanda";

let user = {
  userName: userName,
  age,
  getLocation: function (place) {
    return place;
  },
};
console.log(user.userName);
console.log(user.age);
console.log(user.getLocation(location));
