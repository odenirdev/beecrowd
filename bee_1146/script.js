var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const numbers = lines.map(Number);

while (true) {
  const number = numbers.shift();

  if (number === 0) {
    break;
  }

  let output = "";
  for (let i = 1; i <= number; i++) {
    output += `${i} `;
  }

  console.log(output.trim());
}
