var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i <= 2; i = Math.round((i + 0.2) * 10) / 10) {
  for (let j = 1; j <= 3; j++) {
    const displayI = Math.round(i) === i ? i.toFixed(0) : i.toFixed(1);

    let displayJ = j + i;
    displayJ =
      Math.round(displayJ) === displayJ
        ? displayJ.toFixed(0)
        : displayJ.toFixed(1);

    console.log(`I=${displayI} J=${displayJ}`);
  }
}
