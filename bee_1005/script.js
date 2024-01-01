var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [x, y] = lines;

const sum = parseFloat(x) * 3.5 + parseFloat(y) * 7.5;

const media = (sum / 11).toFixed(5);

console.log(`MEDIA = ${media}`);
