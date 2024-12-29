var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines.map(Number);

function calculateAverage() {
  const notes = [];

  while (inputs.length > 0) {
    const number = inputs.shift();

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
}

while (true) {
  calculateAverage();
  let opcao;

  do {
    console.log("novo calculo (1-sim 2-nao)");
    opcao = inputs.shift();
  } while (opcao !== 1 && opcao !== 2);

  if (opcao === 2) break;
}