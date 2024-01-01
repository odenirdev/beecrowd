var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [a, b] = lines[0].split(" ").map(Number);

if (a % b === 0) {
  console.log("Sao Multiplos");
} else if (b % a === 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
