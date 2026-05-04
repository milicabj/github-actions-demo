const saberi = require("./index");

if (saberi(2, 3) !== 5) {
  throw new Error("Test nije prošao");
}

console.log("Svi testovi su uspješno prošli.");