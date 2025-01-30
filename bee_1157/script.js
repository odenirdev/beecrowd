var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines.shift());

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
