const hasEnoughPlayers = function (getTeamNumber) {
  return getTeamNumber.length >= 7 ? true : false;
};

var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
];

console.log(hasEnoughPlayers(team));
