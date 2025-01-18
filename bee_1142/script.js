var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines[0]);

for (let i = 0; i < n; i++) {
  let output = "";

  const p = i * 4;
  output = `${p + 1} ${p + 2} ${p + 3} PUM`;

  console.log(output);
}
