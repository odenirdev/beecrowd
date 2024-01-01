var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const value = Number(lines[0]);

switch (true) {
  case value >= 0 && value <= 25.0:
    console.log("Intervalo [0,25]");
    return;

  case value > 25.0 && value <= 50.0:
    console.log("Intervalo (25,50]");
    return;

  case value > 50.0 && value <= 75.0:
    console.log("Intervalo [50,75]");
    return;

  case value > 75.0 && value <= 100.0:
    console.log("Intervalo (75,100]");
    return;

  default:
    console.log("Fora de intervalo");
    return;
}
