var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let numbers = lines[0].split(" ").map(Number);

numbers.sort((a, b) => a - b);

for (const number of numbers) {
  console.log(String(number));
}
console.log("");

for (const number of lines[0].split(" ")) {
  console.log(number);
}
