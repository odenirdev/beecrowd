var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [a, b, c] = lines[0].split(" ").map(Number);

const isTriangle = (a = 0, b = 0, c = 0) => {
  return a + b > c && b + c > a && a + c > b;
};

if (isTriangle(a, b, c)) {
  console.log(`Perimetro = ${(a + b + c).toFixed(1)}`);
} else {
  console.log(`Area = ${(((a + b) * c) / 2).toFixed(1)}`);
}
