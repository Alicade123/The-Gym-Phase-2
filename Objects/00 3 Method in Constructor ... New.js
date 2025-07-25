function User() {
  this.name = "Alicade";
  this.age = 10;
  this.sayHi = function () {
    return `My name is: ${this.name}`;
  };
}
User.prototype.Role = function () {
  return this.age >= 18 ? "Admin" : "Guest";
};
const user = new User();
console.log(user.Role());
