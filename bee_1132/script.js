var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let [a, b] = lines.map(Number);

if (a > b) {
  [a, b] = [b, a];
}

let sum = 0;
for (let i = a; i <= b; i++) {
  if (i % 13 === 0) {
    continue;
  }

  sum += i;
}

console.log(sum);
