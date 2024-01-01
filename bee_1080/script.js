var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let numbers = lines.map(Number);

let biggestNumber = 0;
let biggestIndex = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > biggestNumber) {
    biggestNumber = numbers[i];
    biggestIndex = i;
  }
}

console.log(biggestNumber);
console.log(biggestIndex + 1);
