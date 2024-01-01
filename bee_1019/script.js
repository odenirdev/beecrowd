var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let [eventSeconds] = lines;

const ONE_MINUTE_IN_SECONDS = 60; // 1 min

const ONE_HOUR_IN_SECONDS = 60 * ONE_MINUTE_IN_SECONDS; // 1 hour

const hours = parseInt(eventSeconds / ONE_HOUR_IN_SECONDS);
eventSeconds = eventSeconds % ONE_HOUR_IN_SECONDS;

const minutes = parseInt(eventSeconds / ONE_MINUTE_IN_SECONDS);
eventSeconds = eventSeconds % ONE_MINUTE_IN_SECONDS;

const seconds = eventSeconds;

console.log(`${hours}:${minutes}:${seconds}`);
