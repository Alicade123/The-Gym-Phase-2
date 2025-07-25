const person = {
  name: "ABITURIJE",
  greet: () => {
    console.log(this.name);
  },
};
person.greet(); // undefined
