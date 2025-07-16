let fruit = "apple";

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple); // 5 if fruit="apple"

//The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.
