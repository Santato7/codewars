const assert = require("assert");
const points = require("./kata.js");

try {
  assert.strictEqual(points(["3:1", "2:2", "0:1", "3:2"]), 7);
  console.log("Test 1 passed.");
} catch (error) {
  console.error("Test 1 failed.", error.message);
}

try {
  assert.strictEqual(points(["0:3", "1:2", "3:3", "1:1"]), 2);
  console.log("Test 2 passed.");
} catch (error) {
  console.error("Test 2 failed.", error.message);
}

try {
  assert.strictEqual(points(["0:4", "0:2", "2:3", "0:1"]), 0);
  console.log("Test 3 passed.");
} catch (error) {
  console.error("Test 3 failed.", error.message);
}
