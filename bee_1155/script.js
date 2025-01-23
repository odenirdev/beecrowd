var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let s = 0;
for (let i = 1; i <= 100; i++) {
  s += 1 / i;
}

console.log(s.toFixed(2));
