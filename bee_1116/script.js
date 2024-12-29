var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [n, ...rest] = lines;

for (let i = 0; i < n; i++) {
  const numbers = rest[i].split(" ").map((item) => parseInt(item));

  const [a, b] = numbers;
  if (b === 0) {
    console.log("divisao impossivel");
    continue;
  }

  const result = a / b;
  console.log(result.toFixed(1));
}
