var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let value = Number(lines[0]);

console.log(value);

let numberOfBankNote = parseInt(value / 100);
console.log(`${numberOfBankNote} nota(s) de R$ 100,00`);

value = value % 100;
numberOfBankNote = parseInt(value / 50);
console.log(`${numberOfBankNote} nota(s) de R$ 50,00`);

value = value % 50;
numberOfBankNote = parseInt(value / 20);
console.log(`${numberOfBankNote} nota(s) de R$ 20,00`);

value = value % 20;
numberOfBankNote = parseInt(value / 10);
console.log(`${numberOfBankNote} nota(s) de R$ 10,00`);

value = value % 10;
numberOfBankNote = parseInt(value / 5);
console.log(`${parseInt(numberOfBankNote)} nota(s) de R$ 5,00`);

value = value % 5;
numberOfBankNote = parseInt(value / 2);
console.log(`${numberOfBankNote} nota(s) de R$ 2,00`);

value = value % 2;
numberOfBankNote = parseInt(value / 1);
console.log(`${numberOfBankNote} nota(s) de R$ 1,00`);
