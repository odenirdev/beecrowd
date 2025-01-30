var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let s = 0;
for (let i = 1; i <= 39; i++) {
  let j = i * 2 - 1;
  s += j / Math.pow(2, i - 1);
}

console.log(s.toFixed(2));
