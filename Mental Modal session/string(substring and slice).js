const string = "JavaScript";
console.log(string.substring(4, 10)); //Script
console.log(string.substring(10, 4)); //Script
console.log(string.substring(-4, 10)); //Script
console.log(string.substring(4, 4)); //

console.log([..."Lionel Kaneza"]);

var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);
console.log(myChars[0]);
console.log(myChars.length);

const arr = [100, 289, 378, 377283, 37872];
delete arr[-3];
console.log(arr);

let character = string.split("");
for (let x = 0; x < character.length; x++) {
  if (character[x] === "j") console.log(true);
}

const includesuse = string.includes("J"); // true;
console.log(includesuse);

const indexexOfuse = string.indexOf("J") !== -1; //true
console.log(indexexOfuse);

const useofRegEx = /J/.test(string); //true
console.log(useofRegEx);
