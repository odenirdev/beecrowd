var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let [x, y] = lines.map(Number);

if (x < y) {
  [x, y] = [y, x];
}


for (let i = y + 1; i < x; i++) {
  if (i % 5 === 2 || i % 5 === 3) {
    console.log(i);
  }
}