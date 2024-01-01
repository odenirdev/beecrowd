var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines;

const sum = parseFloat(a) * 2 + parseFloat(b) * 3 + parseFloat(c) * 5;

const media = (sum / 10).toFixed(1);

console.log(`MEDIA = ${media}`);
