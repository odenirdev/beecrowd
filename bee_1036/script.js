var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [a, b, c] = lines[0].split(" ");

const delta = Math.pow(b, 2) - 4 * a * c;

if (Math.sign(delta) < 0 || Number(a) <= 0) {
  console.log("Impossivel calcular");
  return;
}

const r1 = (-b + Math.sqrt(delta)) / (2 * a);
console.log(`R1 = ${r1.toFixed(5)}`);

const r2 = (-b - Math.sqrt(delta)) / (2 * a);
console.log(`R2 = ${r2.toFixed(5)}`);
