var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [salary] = lines[0].split(" ").map(Number);

let percentage = 0;
switch (true) {
  case salary <= 400.0:
    percentage = 0.15;
    break;

  case salary > 400.0 && salary <= 800.0:
    percentage = 0.12;
    break;

  case salary > 800.0 && salary <= 1200.0:
    percentage = 0.1;
    break;

  case salary > 1200.0 && salary <= 2000.0:
    percentage = 0.07;
    break;

  case salary > 2000.0:
    percentage = 0.04;
    break;
}

const gain = salary * percentage;
const newSalary = salary + gain;

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${gain.toFixed(2)}`);
console.log(`Em percentual: ${parseInt(percentage * 100)} %`);
