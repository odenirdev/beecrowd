var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

function getTimestampInSeconds(timestamp) {
  const [day, hour, minutes, seconds] = timestamp.split(":").map(Number);

  return day * 86400 + hour * 3600 + minutes * 60 + seconds;
}

function diffTimestampInSeconds(timestamp1, timestamp2) {
  return Math.abs(
    getTimestampInSeconds(timestamp1) - getTimestampInSeconds(timestamp2)
  );
}

function parseTimestamp(seconds) {
  const days = Math.floor(seconds / 86400);
  seconds = seconds % 86400;

  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;

  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  return { days, hours, minutes, seconds };
}

const dayBegin = lines[0];
const dayEnd = lines[2];

const [, dayBeginNumber] = dayBegin.split(" ");
const [, dayEndNumber] = dayEnd.split(" ");

const diff = diffTimestampInSeconds(
  `${dayBeginNumber} : ${lines[1]}`,
  `${dayEndNumber} : ${lines[3]}`
);

const { days, hours, minutes, seconds } = parseTimestamp(diff);

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);
