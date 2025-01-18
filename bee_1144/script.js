var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines[0]);

for (let i = 1; i <= n; i++) {
  console.log(`${i} ${Math.pow(i, 2)} ${Math.pow(i, 3)}`);
  console.log(`${i} ${Math.pow(i, 2) + 1} ${Math.pow(i, 3) + 1}`);
}
