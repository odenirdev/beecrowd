var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let x = Number(lines.shift());

for (let i = 0; i < 10; i++) {
  console.log(`N[${i}] = ${x}`);
  x *= 2;
}
