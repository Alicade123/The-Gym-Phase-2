const months = new Set([
  "date",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]);
months.add([{ "The owner": "Alicade" }]); //{ "The owner": "Alicade" }
months.delete("date"); //true
//console.log(months); //[....]
//console.log(months.size); //in our case: 13
//console.log(months.length); //undefined
//console.log(months.has("October")); //true
//console.log(months.has({ "The owner": "Alicade" })); //false : due to reference comparison

const ownerObj = { "The owner": "Alicade" };
months.add(ownerObj);
console.log(months.has(ownerObj)); // true
console.log(months.values()); //similar to .keys()

const setIterator = months.values();
let number = 1;
for (const month of setIterator) {
  console.log(`${number}:${month}`);
  number++;
}
