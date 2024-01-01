var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

let count = 0;
numbers.forEach((number) => {
  if (number > 0) {
    count++;
  }
});

console.log(`${count} valores positivos`);
