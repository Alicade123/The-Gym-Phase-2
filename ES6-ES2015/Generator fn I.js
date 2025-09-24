function* employees() {
  console.log("The function began execution....");

  const names = [
    "Alicade",
    "Alice",
    "Eric",
    "Aline",
    "Cyiza",
    "Robert",
    "Ihirwe Gwiza",
  ];
  for (const name of names) {
    yield name;
  }
  console.log("The function Execution ended!...");
}

const employeesIterator = employees();
console.log(employeesIterator.next().value);
console.log(employeesIterator.next().value);
console.log(employeesIterator.next().value);


