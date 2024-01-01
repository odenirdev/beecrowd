var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let value = Number(lines[0]) * 100;

const NOTES = [100, 50, 20, 10, 5, 2];

const COINS = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
for (const note of NOTES) {
  const amount = parseInt(value / (note * 100));

  console.log(`${amount} nota(s) de R$ ${note.toFixed(2)}`);

  value = value % (note * 100);
}

console.log("MOEDAS:");
for (const coin of COINS) {
  const amount = parseInt(value / (coin * 100));

  console.log(`${amount} moeda(s) de R$ ${coin.toFixed(2)}`);

  value = value % (coin * 100);
}
