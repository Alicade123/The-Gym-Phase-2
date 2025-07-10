words = ["cat", "in", "hat"];
words.forEach((element, index, array) => {
  console.log(
    "The index is: " +
      index +
      " The word is: " +
      element.toUpperCase() +
      " from whole array: " +
      array.map((el) => el.toUpperCase())
  );
});
