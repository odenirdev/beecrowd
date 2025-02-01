var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines.shift());

for (let i = 0; i < n; i++) {
  const x = Number(lines[i]);
  const dividers = [];

  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      dividers.push(i);
    }
  }

  if (dividers.length === 2 && dividers.includes(x) && dividers.includes(1)) {
    console.log(`${x} eh primo`);
  } else {
    console.log(`${x} nao eh primo`);
  }
}
