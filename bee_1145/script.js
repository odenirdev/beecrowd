var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [x, y] = lines[0].split(" ").map(Number);

let count = 0;

while (true) {
  let output = "";
  for (let i = 0; i < x; i++) {
    output += `${count + 1} `;
    count++;
  }

  if (count <= y) {
    console.log(output.trim());
  } else {
    break;
  }
}
