var eatsPlants = false;
var eatsAnimals = true;

var category =
  eatsAnimals && eatsPlants
    ? "omnivore"
    : eatsPlants
    ? "herbivore"
    : eatsAnimals
    ? "carnivore"
    : "undefined";

console.log(category);
