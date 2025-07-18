const user = {
  name: "Alicade",
  arrowFn: () => {
    console.log(this.name); //undefined because the arrow function doesn't have it's this
  },
};
user.arrowFn();

//solution
const users = {
  names: "Alicade DUSABE",
  greatHim: function () {
    const arrow = () => {
      console.log(this.names); // Arrow function is getting names from sarrounding environment(global) which is this regular function.
    };
    arrow();
  },
};
users.greatHim();
