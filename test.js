const saberi = require("./index");

if (saberi(2, 3) !== 5) {
  throw new Error("Test nije prošao: 2 + 3 treba da bude 5");
}

console.log("Svi testovi su uspješno prošli.");