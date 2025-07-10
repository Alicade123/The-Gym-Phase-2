var donuts = ["jelly donut", "chocolate donut", "glazed donut"];
const useOfMap = (donuts) => {
  return donuts.map((name) => {
    name += " Alicade!";
    name = name.toUpperCase();
    return name;
  });
};

console.log(useOfMap(donuts));
