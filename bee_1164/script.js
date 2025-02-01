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

  let sum = 0;
  for (let i = 0; i < dividers.length; i++) {
    if (dividers[i] === x) {
      continue;
    }

    sum += dividers[i];
  }

  if (sum === x) {
    console.log(`${x} eh perfeito`);
  } else {
    console.log(`${x} nao eh perfeito`);
  }
}
