var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines.shift());

let fibonacci = [0, 1];

while (fibonacci.length < n) {
  const i = fibonacci.length;

  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci.join(" "));
