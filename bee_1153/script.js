var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines.shift());

let result = 0;
for (let i = 0; i < n; i++) {
  if (i === 0) {
    result += n;
  } else {
    result *= n - i;
  }
}

console.log(result);
