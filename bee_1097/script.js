var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

for (let i = 1; i <= 9; i += 2) {
  for (let j = i + 6; j >= i + 4; j--) {
    console.log(`I=${i} J=${j}`);
  }
}
