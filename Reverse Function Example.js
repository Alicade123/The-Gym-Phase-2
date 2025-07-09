const reverseFunction = (string) => {
  var reversed = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};

console.log(reverseFunction("Alicade"));

function sayHello() {
  var message = "Hello!";
  console.log(message.split("").reverse().join(""));
}

sayHello();
