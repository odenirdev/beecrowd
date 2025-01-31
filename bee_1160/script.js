var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const t = Number(lines.shift());

for (let i = 0; i < t; i++) {
  let [pa, pb, g1, g2] = lines[i].split(" ").map((item) => Number(item));

  let years = 0;
  while (true) {
    years++;
    pa += Math.floor((pa * g1) / 100);
    pb += Math.floor((pb * g2) / 100);

    if (years > 100) {
      console.log("Mais de 1 seculo.");
      break;
    }

    if (pa > pb) {
      console.log(`${years} anos.`);
      break;
    }
  }
}
