var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const DISTANCE_TRAVELED_PER_LITER_OF_FUEL_IN_KM = 12;

const [timeSpentOnTravelInHours, averageSpeedOnTravelInKmPerHours] = lines;

const distanceOnTravelInKm =
  timeSpentOnTravelInHours * averageSpeedOnTravelInKmPerHours;

const fuelSpent =
  distanceOnTravelInKm / DISTANCE_TRAVELED_PER_LITER_OF_FUEL_IN_KM;

console.log(fuelSpent.toFixed(3));
