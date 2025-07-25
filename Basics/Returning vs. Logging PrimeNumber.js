function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      console.log(number + " is divisible by " + i);
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(11));

//function2
function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
  return "Returning: I am returning this string!";
}

isThisWorking(3);
