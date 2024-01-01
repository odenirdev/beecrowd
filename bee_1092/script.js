var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [n, ...inputs] = lines;

let experiences = {
  C: 0,
  R: 0,
  S: 0,
};

for (let i = 0; i < n; i++) {
  const [quantity, initial] = inputs[i].split(" ");

  experiences[initial] += Number(quantity);
}

const total = experiences["C"] + experiences["R"] + experiences["S"];

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${experiences["C"]}`);
console.log(`Total de ratos: ${experiences["R"]}`);
console.log(`Total de sapos: ${experiences["S"]}`);
console.log(
  `Percentual de coelhos: ${((experiences["C"] / total) * 100).toFixed(2)} %`
);
console.log(
  `Percentual de ratos: ${((experiences["R"] / total) * 100).toFixed(2)} %`
);
console.log(
  `Percentual de sapos: ${((experiences["S"] / total) * 100).toFixed(2)} %`
);
