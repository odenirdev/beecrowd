var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

sum = 0;
count = 0;
while (true) {
  const n = Number(lines.shift());
  if (n < 0) {
    break;
  }
  sum += n;
  count++;
}

console.log((sum / count).toFixed(2));
