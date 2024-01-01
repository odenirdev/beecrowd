var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let salary = lines.map(Number)[0];

let tax;
switch (true) {
  case salary > 0 && salary <= 2000.0:
    tax = 0;
    break;

  case salary > 2000.0 && salary <= 3000.0:
    tax = (salary - 2000.0) * 0.08;
    break;

  case salary > 3000.0 && salary <= 4500.0:
    tax = 1000.0 * 0.08 + (salary - 3000.0) * 0.18;
    break;

  case salary > 4500.0:
    tax = 1000.0 * 0.08 + 1500.0 * 0.18 + (salary - 4500.0) * 0.28;
    break;
}

if (tax === 0) {
  console.log("Isento");
} else {
  console.log("R$ " + tax.toFixed(2));
}
