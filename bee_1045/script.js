var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines[0].split(" ").map(Number);

const n = inputs.length;
for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - i - 1; j++) {
    if (inputs[j] < inputs[j + 1]) {
      const aux = inputs[j];
      inputs[j] = inputs[j + 1];
      inputs[j + 1] = aux;
    }
  }
}

const [a, b, c] = inputs;

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
  return;
}

if (Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2)) {
  console.log("TRIANGULO RETANGULO");
} else if (Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2)) {
  console.log("TRIANGULO OBTUSANGULO");
} else {
  console.log("TRIANGULO ACUTANGULO");
}

if (a === b && b === c && a === c) {
  console.log("TRIANGULO EQUILATERO");
} else if (a === b || b === c || a === c) {
  console.log("TRIANGULO ISOSCELES");
}
