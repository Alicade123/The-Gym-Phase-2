console.log("Y" != "y");
let str = "abcdefghijklmnopqrstuvwxyz";
console.log(str.length);
console.log(str.charCodeAt());
str.split("").forEach((element, index) => {
  console.log(str.charCodeAt(index) + " : " + element);
});
