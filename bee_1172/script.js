var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let count = 0;
while (true) {
  const x = Number(lines.shift());

  if (x > 0) {
    console.log(`X[${count}] = ${x}`);
  } else {
    console.log(`X[${count}] = 1`);
  }

  if (lines.length === 0) {
    break;
  }

  count++;
}
