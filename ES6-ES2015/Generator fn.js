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
    console.log(name);
    if (name === "Aline") yield;
  }
  console.log("The function Execution ended!...");
}

const employeesIterator = employees();
employeesIterator.next();
employeesIterator.next();
