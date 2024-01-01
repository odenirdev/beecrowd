var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [n, ...numbers] = lines.map(Number);

for (let i = 0; i < n; i++) {
  if (numbers[i] === 0) {
    console.log("NULL");
    continue;
  }

  let isEven = numbers[i] % 2 === 0;

  let isPositive = numbers[i] > 0;

  switch (true) {
    case isEven && isPositive:
      console.log("EVEN POSITIVE");
      break;

    case isEven && !isPositive:
      console.log("EVEN NEGATIVE");
      break;

    case !isEven && isPositive:
      console.log("ODD POSITIVE");
      break;

    case !isEven && !isPositive:
      console.log("ODD NEGATIVE");
      break;
  }
}
