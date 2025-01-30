var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

while (true) {
  const x = Number(lines.shift());
  if (x === 0) {
    break;
  }

  const numbers = [];
  let count = x;
  while (numbers.length < 5) {
    if (count % 2 === 0) {
      numbers.push(count);
    }
    count++;
  }

  console.log(numbers.reduce((acc, curr) => acc + curr));
}
