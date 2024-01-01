var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const radius = Number(lines[0]);

const PI = 3.14159;

const volume = ((4.0 / 3.0) * PI * Math.pow(radius, 3)).toFixed(3);

console.log(`VOLUME = ${volume}`);
