var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines.map(Number);

let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (inputs.length > 0) {
  const number = inputs.shift();

  if (number === 4) {
    break;
  }

  if (number === 1) {
    alcool++;
  } else if (number === 2) {
    gasolina++;
  } else if (number === 3) {
    diesel++;
  }
}

console.log("MUITO OBRIGADO");

console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
