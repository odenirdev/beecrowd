var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const YEAR_IN_DAYS = 365;

const MOUTH_IN_DAYS = 30;

let [ageInDays] = lines;

const years = parseInt(ageInDays / YEAR_IN_DAYS);
console.log(`${years} ano(s)`);

ageInDays = ageInDays % YEAR_IN_DAYS;
const mouths = parseInt(ageInDays / MOUTH_IN_DAYS);
console.log(`${mouths} mes(es)`);

ageInDays = ageInDays % MOUTH_IN_DAYS;
const days = parseInt(ageInDays);
console.log(`${days} dia(s)`);
