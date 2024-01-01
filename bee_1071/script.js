var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

let smallerNumber = 0;
let biggerNumber = 0;
if (numbers[0] > numbers[1]) {
  biggerNumber = numbers[0];
  smallerNumber = numbers[1];
} else {
  biggerNumber = numbers[1];
  smallerNumber = numbers[0];
}

let oddNumbers = [];
for (let i = smallerNumber + 1; i < biggerNumber; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}

const sum = oddNumbers.reduce((acc, number) => acc + number, 0);

console.log(sum);
