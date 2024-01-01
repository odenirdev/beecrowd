var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

let count = 0;
for (let i = 0; i < 5; i++) {
  if (numbers[i] % 2 === 0) {
    count++;
  }
}

console.log(`${count} valores pares`);
