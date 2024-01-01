var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const floatingPointNumber = 3;

const inputs = lines[0].split(" ");

const a = Number(inputs[0]);
const b = Number(inputs[1]);
const c = Number(inputs[2]);

const triangle = (a * c) / 2;

console.log(`TRIANGULO: ${triangle.toFixed(floatingPointNumber)}`);

const PI = 3.14159;

const circle = PI * Math.pow(c, 2);

console.log(`CIRCULO: ${circle.toFixed(floatingPointNumber)}`);

const trapezio = ((a + b) * c) / 2;

console.log(`TRAPEZIO: ${trapezio.toFixed(floatingPointNumber)}`);

const square = Math.pow(b, 2);

console.log(`QUADRADO: ${square.toFixed(floatingPointNumber)}`);

const rectangle = a * b;

console.log(`RETANGULO: ${rectangle.toFixed(floatingPointNumber)}`);
