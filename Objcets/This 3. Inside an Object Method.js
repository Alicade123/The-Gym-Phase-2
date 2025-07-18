const user = {
  name: "Dusabe",
  age: 23,
  Company: "The Gym Rwanda",
  CompanyDescription: "Software intense program",
  referToObjectItsefl: function () {
    console.log(this);
    console.log(this.CompanyDescription); // user.CompanyDescription (object property)
  },
};

user.referToObjectItsefl();
console.log(this.CompanyDescription); // will be undefined because the this will refer to global objects
