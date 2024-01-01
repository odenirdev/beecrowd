var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines[0].split(" ");

const a = Number(inputs[0]);
const b = Number(inputs[1]);
const c = Number(inputs[2]);

const biggerAB = (a + b + Math.abs(a - b)) / 2;
const biggerABC = (biggerAB + c + Math.abs(biggerAB - c)) / 2;

console.log(`${biggerABC} eh o maior`);
