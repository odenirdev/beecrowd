var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines[0].split(" ");

const A = Number(inputs[0]);
const B = Number(inputs[1]);
const C = Number(inputs[2]);
const D = Number(inputs[3]);

const isBiggerBC = B > C;

const isBiggerDA = D > A;

const cd = C + D;

const ab = A + B;

const isBiggerCDAB = cd > ab;

const isPositiveC = Math.sign(C) > 0;

const isPositiveD = Math.sign(D) > 0;

const isPairA = A % 2 === 0;

if (
  isBiggerBC &&
  isBiggerDA &&
  isBiggerCDAB &&
  isPositiveC &&
  isPositiveD &&
  isPairA
) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
