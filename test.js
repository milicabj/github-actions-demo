const calculateTotalPrice = require("./index");

if (calculateTotalPrice(10, 3) !== 30) {
  throw new Error("Test nije prošao");
}

console.log("Svi testovi su uspješno prošli.");