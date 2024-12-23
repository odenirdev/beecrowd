var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [i, ...rest] = lines;

for (let j = 0; j < i; j++) {
  let [x, y] = rest[j].split(" ").map(Number);
  if (x > y) {
    [x, y] = [y, x];
  }

  const oddNumbers = [];
  for (let k = x + 1; k < y; k++) {
    if (k % 2 !== 0) {
      oddNumbers.push(k);
    }
  }

  const sum = oddNumbers.reduce((acc, number) => acc + number, 0);

  console.log(sum);
}
