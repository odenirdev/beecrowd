var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const distance = lines[0];

const minutesPerKm = 2;

const productDistanceMinutes = distance * minutesPerKm;

console.log(`${productDistanceMinutes} minutos`);
