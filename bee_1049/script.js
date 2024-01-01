var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const [firstInput, secoundInput, thirdInput] = lines;

if (firstInput === "vertebrado") {
  if (secoundInput === "ave") {
    if (thirdInput === "carnivoro") {
      console.log("aguia");
    } else {
      console.log("pomba");
    }
  } else {
    if (thirdInput === "onivoro") {
      console.log("homem");
    } else {
      console.log("vaca");
    }
  }
} else {
  if (secoundInput === "inseto") {
    if (thirdInput === "hematofago") {
      console.log("pulga");
    } else {
      console.log("lagarta");
    }
  } else {
    if (thirdInput === "hematofago") {
      console.log("sanguessuga");
    } else {
      console.log("minhoca");
    }
  }
}
