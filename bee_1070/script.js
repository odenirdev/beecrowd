var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let x = Number(lines[0]);

let count = 0;
while (count < 6) {
  if (x % 2 !== 0) {
    console.log(x);
    count++;
  }

  x++;
}
