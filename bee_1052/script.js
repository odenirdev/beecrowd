var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let monthNumber = lines.map(Number)[0];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(months[monthNumber - 1]);
