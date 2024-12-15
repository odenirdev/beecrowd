var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let i = 1;
let j = 60;

while (j >= 0) {
  console.log(`I=${i} J=${j}`);
  j -= 5;
  i += 3;
}
