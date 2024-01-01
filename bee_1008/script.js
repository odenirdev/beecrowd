var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [employeeNumber, workedHours, valuePerHour] = lines;

console.log(`NUMBER = ${employeeNumber}`);
console.log(
  `SALARY = U$ ${(Number(workedHours) * Number(valuePerHour)).toFixed(2)}`
);
