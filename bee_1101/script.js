var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let i = 0;
while (true) {
  let [m, n] = lines[i].split(" ").map(Number);

  if (m > n) {
    [m, n] = [n, m];
  }

  let output = "";
  let sum = 0;
  for (let j = m; j <= n; j++) {
    output += j + " ";
    sum += j;
  }

  if (m <= 0 || n <= 0) {
    break;
  }

  console.log(`${output}Sum=${sum}`);
  i++;
}
