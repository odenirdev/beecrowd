var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < 100; i++) {
  const x = Number(lines.shift());

  if (x <= 10) {
    console.log(`A[${i}] = ${x.toFixed(1)}`);
  }
}
