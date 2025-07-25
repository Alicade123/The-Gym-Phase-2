function makeLine(length) {
  var line = "";
  for (var i = 1; i <= length; i++) {
    let here = "";
    for (var j = 1; j <= i; j++) {
      here += "* ";
    }
    line += here + "\n";
  }
  return line;
}

console.log(makeLine(10));
