//variable overriding (shadowing)
var y = 1;

function addTwo() {
  var y = y + 2; // undefined + 2 => NAN
}

addTwo();
y = y + 1; //1+1
console.log(y); //2

//example2 :
var x = 1;

function addTwo() {
  x = x + 2; //1+2=>3
}

addTwo();
x = x + 1; // 3+1
console.log(x); //4
