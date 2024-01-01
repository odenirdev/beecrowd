var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

const inputs = lines[0].split(" ");

const [code, quantity] = inputs.map(Number);

const products = [
  {
    code: 1,
    name: "Cachorro Quente",
    price: 4.0,
  },
  {
    code: 2,
    name: "X-Salada",
    price: 4.5,
  },
  {
    code: 3,
    name: "X-Bacon",
    price: 5,
  },
  {
    code: 4,
    name: "Torrada simples",
    price: 2,
  },
  {
    code: 5,
    name: "Refrigerante",
    price: 1.5,
  },
];

for (const product of products) {
  if (product.code === code) {
    const total = product.price * quantity;

    console.log(`Total: R$ ${total.toFixed(2)}`);

    return;
  }
}
