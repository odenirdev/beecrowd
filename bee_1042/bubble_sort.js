var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const printSortedNumbers = (numbers = []) => {
  const n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log(numbers[j], numbers[j + 1]);
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }

      console.log(numbers);
    }
  }

  numbers.forEach((number) => {
    console.log(number);
  });
};

const printOriginalNumbers = (numbers = []) => {
  numbers.forEach((number) => {
    console.log(number);
  });
};

printSortedNumbers(lines[0].split(" ").map(Number));

console.log("");

printOriginalNumbers(lines[0].split(" ").map(Number));
