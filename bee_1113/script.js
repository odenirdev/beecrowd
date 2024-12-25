var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let i = 0;
while (true) {
  let [x, y] = lines[i].split(" ").map(Number);

  if (x === y) {
    break;
  }

  if (x > y) {
    console.log("Decrescente");
  } else {
    console.log("Crescente");
  }

  i++;
}
