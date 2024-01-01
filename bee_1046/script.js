var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [hourIn, hourOut] = lines[0].split(" ").map(Number);

if (hourIn === hourOut) {
  console.log("O JOGO DUROU 24 HORA(S)");
  return;
}

if (hourIn < hourOut) {
  console.log(`O JOGO DUROU ${hourOut - hourIn} HORA(S)`);
} else {
  console.log(`O JOGO DUROU ${24 - hourIn + hourOut} HORA(S)`);
}
