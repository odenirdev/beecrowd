var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split("\n");

let i = 0;
while (true) {
  let password = lines[i];

  if (password === "2002") {
    console.log("Acesso Permitido");
    break;
  } else {
    console.log("Senha Invalida");
  }
  i++;
}
