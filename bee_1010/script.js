var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const [fisrtPiece, secondPiece] = lines;

let [, fisrtPiece_numberOfPieces, fisrtPiece_valuePerPiece] =
  fisrtPiece.split(" ");

const firstPieceTotal =
  Number(fisrtPiece_numberOfPieces) * Number(fisrtPiece_valuePerPiece);

let [, secondPiece_numberOfPieces, secondPiece_valuePerPiece] =
  secondPiece.split(" ");

const secondPieceTotal =
  Number(secondPiece_numberOfPieces) * Number(secondPiece_valuePerPiece);

console.log(
  `VALOR A PAGAR: R$ ${(firstPieceTotal + secondPieceTotal).toFixed(2)}`
);
