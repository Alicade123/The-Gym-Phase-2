function User() {
  this.name = "Alicade";
  this.sayHi = function () {
    return `My name is: ${this.name}`;
  };
}
const user = new User();
console.log(user.sayHi());
