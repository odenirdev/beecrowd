var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

let valuePairs = [];
let oddValues = [];
let positiveValues = [];
let nagativeValues = [];

for (let i = 0; i < 5; i++) {
  if (numbers[i] % 2 === 0) {
    valuePairs.push(numbers[i]);
  } else {
    oddValues.push(numbers[i]);
  }

  if (numbers[i] > 0) {
    positiveValues.push(numbers[i]);
  } else if (numbers[i] !== 0) {
    nagativeValues.push(numbers[i]);
  }
}

console.log(`${valuePairs.length} valor(es) par(es)`);
console.log(`${oddValues.length} valor(es) impar(es)`);
console.log(`${positiveValues.length} valor(es) positivo(s)`);
console.log(`${nagativeValues.length} valor(es) negativo(s)`);
