var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const totalDistanceTraveled = Number(lines[0]);
const totalFuelSpent = Number(lines[1]);

console.log(`${(totalDistanceTraveled / totalFuelSpent).toFixed(3)} km/l`);
