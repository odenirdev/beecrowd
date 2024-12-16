var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let i = 1;
let j = 7;

while (i <= 9) {
  while (j >= 5) {
    console.log(`I=${i} J=${j}`);
    j -= 1;
  }
  i += 2;
  j = 7;
}
