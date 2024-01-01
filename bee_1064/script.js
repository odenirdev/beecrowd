var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

const positiveNumbers = numbers.filter((number) => number > 0);

const average =
  positiveNumbers.reduce((acc, number) => acc + number, 0) /
  positiveNumbers.length;

console.log(`${positiveNumbers.length} valores positivos`);
console.log(average.toFixed(1));
