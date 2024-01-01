var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let [n, ...inputs] = lines;

n = Number(n);

for (let i = 0; i < n; i++) {
  const [a, b, c] = inputs[i].split(" ").map(Number);

  const avarage = (a * 2 + b * 3 + c * 5) / 10;

  console.log(avarage.toFixed(1));
}
