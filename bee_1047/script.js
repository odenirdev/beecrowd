var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [hourIn, minutesIn, hourOut, minutesOut] = lines[0]
  .split(" ")
  .map(Number);

const beginInMinutes = hourIn * 60 + minutesIn;
const endInMinutes = hourOut * 60 + minutesOut;

if (hourIn === hourOut && minutesIn === minutesOut) {
  console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
  let durationInMinutes = endInMinutes - beginInMinutes;

  if (durationInMinutes <= 0) {
    durationInMinutes += 24 * 60;
  }

  const durationHour = Math.floor(durationInMinutes / 60);
  const durationMinutes = durationInMinutes % 60;

  console.log(
    `O JOGO DUROU ${durationHour} HORA(S) E ${durationMinutes} MINUTO(S)`
  );
}
