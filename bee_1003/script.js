var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const [x, y] = lines;

const sum = Number(x) + Number(y);

console.log(`SOMA = ${sum}`);
