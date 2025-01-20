var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [a, ...rest] = lines[0].split(" ").map(Number);

let n = rest.shift();
while (n <= 0) {
  n = rest.shift();
}

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += a + i;
}

console.log(sum);
