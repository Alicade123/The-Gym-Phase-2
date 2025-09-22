const gemstone = {
  type: "quartz",
  color: "rose",
  carat: 21.29,
};

const { type, color, carat } = gemstone;
console.log(color);

const point = [10, 25, -34];

const x = point[0];
const y = point[1];
const z = point[2];

console.log(x, y, z);

const [k, , i] = point;
console.log([i]);
