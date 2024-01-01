var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const xy1 = lines[0].split(" ");
const xy2 = lines[1].split(" ");

const distance = Math.sqrt(
  Math.pow(Number(xy2[0]) - Number(xy1[0]), 2) +
    Math.pow(Number(xy2[1]) - Number(xy1[1]), 2)
);

console.log(distance.toFixed(4));
