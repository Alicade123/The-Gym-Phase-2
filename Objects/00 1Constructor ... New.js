function User(code, usrName) {
  this.name = "Alicade";
  this.surName = "Dusabe";
  this.nickName = "Abiturije";
  this.age = 3;
  this.privillage = this.age > 18 ? "View & Edit" : "View";
  this.userNumber = code;
  this.userName = usrName ?? "guest";
}

const user = new User("22-RP07-268", "Admin");
console.log(user);

function Test() {
  this.name = "Alicade";
  return "Dusabe"; //return will be always omitted means that it'll always return this
}
const test = new Test();
console.log(test);
1504311