var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines.shift());

for (let i = 0; i < n; i++) {
  let [x, y] = lines
    .shift()
    .split(" ")
    .map((item) => Number(item));

  const numbers = [];
  let count = x;
  while (numbers.length < y) {
    if (count % 2 !== 0) {
      numbers.push(count);
    }
    count++;
  }

  console.log(numbers.reduce((acc, curr) => acc + curr));
}
