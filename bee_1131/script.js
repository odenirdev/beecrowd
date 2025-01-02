var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let count = 0;
let wins = [0, 0];
let draws = 0;

const execute = () => {
  const [inter, gremio] = lines.shift().split(" ").map(Number);

  if (inter > gremio) wins[0]++;
  else if (gremio > inter) wins[1]++;
  else draws++;

  count++;
};

const printResult = () => {
  console.log(`${count} grenais`);
  console.log(`Inter:${wins[0]}`);
  console.log(`Gremio:${wins[1]}`);
  console.log(`Empates:${draws}`);

  if (wins[0] > wins[1]) console.log("Inter venceu mais");
  else if (wins[1] > wins[0]) console.log("Gremio venceu mais");
  else console.log("Nao houve vencedor");
};

while (true) {
  execute();

  do {
    console.log("Novo grenal (1-sim 2-nao)");
    opcao = parseInt(lines.shift());
  } while (opcao !== 1 && opcao !== 2);

  if (opcao === 2) {
    printResult();
    break;
  }
}
