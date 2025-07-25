var i = 1;
do {
  var j = 1;

  do {
    console.log(`${i} + ${j} :`, i + j);
    j++;
  } while (j <= 5);
  i++;
} while (i <= 2);
