// const nullish = null;
// const nullishObj = {
//   name: null,
// };
// const useNull = (x, y) => {
//   return [x + 2, (y = 10)];
// };
// console.log(useNull(nullish, nullishObj.name));
// console.log(nullish); //null (no effect of change in function)
// console.log(nullishObj.name); //null (no effect of change in function)

const person = {
  name: "Alicade",
  age: 23,
  date: Date(), //date: 'Tue Jul 22 2025 22:11:44 GMT+0200 (Central Africa Time)'
};

const modifyObj = (obj) => {
  obj.name = "Dusabe";
  obj.age = 24;
  // let newdate = new Date();
  // obj.date = Date().getFullYear();
};
modifyObj(person);
console.log(person);
