//variable reasignment
var bookTitle = "Le Petite Prince";
console.log(bookTitle);
function displayBookEnglish() {
  bookTitle = "The Little Prince";
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);

console.log("\n");

//variable overriding (shadowing)
var bookTitle = "Le Petite Prince";
console.log(bookTitle);
function displayBookEnglish() {
  var bookTitle = "The Little Prince";
  console.log(bookTitle);
}

displayBookEnglish();
console.log(bookTitle);


