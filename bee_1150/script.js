var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

let x = numbers.shift();
let y = numbers.shift();

while (x >= y) {
  y = numbers.shift();
}

let count = 1;
let sum = x;

while (sum <= y) {
  x++;
  count++;
  sum += x;
}

console.log(count);
