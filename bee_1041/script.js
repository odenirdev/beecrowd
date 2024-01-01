var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [x, y] = lines[0].split(" ").map(Number);

switch (true) {
  case x > 0 && y > 0:
    console.log("Q1");
    return;

  case x < 0 && y > 0:
    console.log("Q2");
    return;

  case x < 0 && y < 0:
    console.log("Q3");
    return;

  case x > 0 && y < 0:
    console.log("Q4");
    return;

  case x === 0 && y === 0:
    console.log("Origem");
    return;

  case x === 0:
    console.log("Eixo Y");
    return;

  case y === 0:
    console.log("Eixo X");
    return;
}
