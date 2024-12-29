var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines.map(Number);
const notes = [];
for (let number of inputs) {
  if (number < 0 || number > 10) {
    console.log("nota invalida");
    continue;
  }

  notes.push(number);

  if (notes.length === 2) {
    const average = (notes[0] + notes[1]) / 2;
    console.log(`media = ${average.toFixed(2)}`);
    return;
  }
}
