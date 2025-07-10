var bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

var totals = bills.map((bill) => {
  return parseFloat((bill * 1.15).toFixed(2)); // or return parseFloat((bill + (bill * 15) / 100).toFixed(2));
});

console.log(totals);
