var shirtWidth = 18;
var shirtLength = 29;
var shirtSleeve = 8.47;

if (shirtWidth >= 18 && shirtWidth < 20) {
  if (shirtLength >= 28 && shirtLength < 29) {
    if (shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
      console.log("S");
    } else {
      console.log("NA");
    }
  } else {
    console.log("NA");
  }
} else if (shirtWidth >= 20 && shirtWidth < 22) {
  if (shirtLength >= 29 && shirtLength < 30) {
    if (shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
      console.log("M");
    } else {
      console.log("NA");
    }
  } else {
    console.log("NA");
  }
} else if (shirtWidth >= 22 && shirtWidth < 24) {
  if (shirtLength >= 30 && shirtLength < 31) {
    if (shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
      console.log("L");
    } else {
      console.log("NA");
    }
  } else {
    console.log("NA");
  }
} else if (shirtWidth >= 24 && shirtWidth < 26) {
  if (shirtLength >= 31 && shirtLength < 33) {
    if (shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
      console.log("XL");
    } else {
      console.log("NA");
    }
  } else {
    console.log("NA");
  }
} else if (shirtWidth >= 26 && shirtWidth < 28) {
  if (shirtLength >= 33 && shirtLength < 34) {
    if (shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
      console.log("2XL");
    } else {
      console.log("NA");
    }
  } else {
    console.log("NA");
  }
} else if (shirtWidth >= 28) {
  if (shirtLength >= 34) {
    if (shirtSleeve >= 10.13) {
      console.log("3XL");
    } else {
      console.log("NA");
    }
  } else {
    console.log("NA");
  }
} else {
  console.log("NA");
}
