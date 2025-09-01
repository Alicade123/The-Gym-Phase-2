const h1 = document.getElementsByTagName("h1")[0];

const copy = h1.cloneNode(true);
console.log(copy);

const ul = document.getElementsByTagName("ul")[0];
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

const btn = document.getElementById("between");
btn.style.color = "red";
console.log((btn.nextElementSibling.style.color = "green"));
console.log((btn.previousElementSibling.style.color = "yellow"));

console.log((ul.firstElementChild.style.color = "indigo"));
console.log((ul.lastElementChild.style.color = "blue"));

console.log(ul.firstChild);
console.log(btn.nextSibling);
console.log(ul.children);
const newArray = Array.from(ul.children);
newArray.forEach((x) => console.log((x.textContent += "Alicade")));
const hx = document.createElement("li");
hx.textContent = "Alicade's List";
ul.insertAdjacentElement("afterbegin", hx);
// console.log(ul.replaceChildren("k"));
// ul.childNodes.forEach((z) => console.log(z));
