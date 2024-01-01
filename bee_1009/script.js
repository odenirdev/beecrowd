var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [, fixedSalary, totalSales] = lines;

const commission = Number(totalSales) * 0.15;

const totalReceivable = Number(fixedSalary) + commission;

console.log(`TOTAL = R$ ${totalReceivable.toFixed(2)}`);
