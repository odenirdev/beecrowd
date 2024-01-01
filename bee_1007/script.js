var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c, d] = lines;

const diff = parseFloat(a) * parseFloat(b) - parseFloat(c) * parseFloat(d);

console.log(`DIFERENCA = ${diff}`);
