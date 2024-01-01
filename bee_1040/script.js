var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const testScores = lines[0].split(" ").map(Number);

const weightOfTests = [2, 3, 4, 1];

const testScoresTotal = testScores.reduce((sum, value, i) => {
  return sum + value * weightOfTests[i];
}, 0);

const weightOfTestsTotal = weightOfTests.reduce((sum, value) => sum + value, 0);

const average = testScoresTotal / weightOfTestsTotal;

console.log(`Media: ${average.toFixed(1)}`);

if (average >= 7.0) {
  console.log("Aluno aprovado.");
} else if (average < 5.0) {
  console.log("Aluno reprovado.");
} else {
  console.log("Aluno em exame.");

  const [examScore] = lines[1].split(" ").map(Number);

  console.log(`Nota do exame: ${examScore.toFixed(1)}`);

  const finalScore = (examScore + average) / 2;

  if (finalScore >= 5.0) {
    console.log("Aluno aprovado.");
  } else {
    console.log("Aluno reprovado.");
  }

  console.log(`Media final: ${finalScore.toFixed(1)}`);
}
