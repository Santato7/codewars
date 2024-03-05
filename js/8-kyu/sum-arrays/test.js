const assert = require("assert");
const sum = require("./kata.js");

// Testes
try {
  assert.strictEqual(sum([]), 0); // Teste para array vazio
  console.log("Test 1 passed.");
} catch (error) {
  console.error("Test 1 failed.", error.message);
}

try {
  assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2); // Teste para array com números
  console.log("Test 2 passed.");
} catch (error) {
  console.error("Test 2 failed.", error.message);
}
