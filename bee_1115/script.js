var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let i = 0;
while (true) {
  if (lines[i]) {
    let [x = 0, y = 0] = lines[i].split(" ").map(Number);

    if (x === 0 && y === 0) {
      return;
    }

    if (x > 0 && y > 0) {
      console.log("primeiro");
    } else if (x < 0 && y > 0) {
      console.log("segundo");
    } else if (x < 0 && y < 0) {
      console.log("terceiro");
    } else if (x > 0 && y < 0) {
      console.log("quarto");
    }
  }

  i++;
}
