const assert = require("assert");
const sum = require("./kata.js");

try {
  assert.strictEqual(sum([]), 0);
  console.log("Test 1 passed.");
} catch (error) {
  console.error("Test 1 failed.", error.message);
}

try {
  assert.strictEqual(sum([1, 5.2, 4, 0, -1]), 9.2);
  console.log("Test 2 passed.");
} catch (error) {
  console.error("Test 2 failed.", error.message);
}
