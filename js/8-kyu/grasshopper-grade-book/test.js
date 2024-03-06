const assert = require("assert");
const getGrade = require("./kata.js");

try {
  assert.strictEqual(getGrade(95, 90, 93), "A");
  console.log("Test 1 passed.");
} catch (error) {
  console.error("Test 1 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(100, 85, 96), "A");
  console.log("Test 2 passed.");
} catch (error) {
  console.error("Test 2 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(92, 93, 94), "A");
  console.log("Test 3 passed.");
} catch (error) {
  console.error("Test 3 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(70, 70, 100), "B");
  console.log("Test 4 passed.");
} catch (error) {
  console.error("Test 4 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(82, 85, 87), "B");
  console.log("Test 5 passed.");
} catch (error) {
  console.error("Test 5 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(84, 79, 85), "B");
  console.log("Test 6 passed.");
} catch (error) {
  console.error("Test 6 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(89, 89, 90), "B");
  console.log("Test 7 passed.");
} catch (error) {
  console.error("Test 7 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(70, 70, 70), "C");
  console.log("Test 8 passed.");
} catch (error) {
  console.error("Test 8 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(75, 70, 79), "C");
  console.log("Test 9 passed.");
} catch (error) {
  console.error("Test 9 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(60, 82, 76), "C");
  console.log("Test 10 passed.");
} catch (error) {
  console.error("Test 10 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(65, 70, 59), "D");
  console.log("Test 11 passed.");
} catch (error) {
  console.error("Test 11 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(66, 62, 68), "D");
  console.log("Test 12 passed.");
} catch (error) {
  console.error("Test 12 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(58, 62, 70), "D");
  console.log("Test 13 passed.");
} catch (error) {
  console.error("Test 13 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(44, 55, 52), "F");
  console.log("Test 14 passed.");
} catch (error) {
  console.error("Test 14 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(48, 55, 52), "F");
  console.log("Test 15 passed.");
} catch (error) {
  console.error("Test 15 failed.", error.message);
}

try {
  assert.strictEqual(getGrade(58, 59, 60), "F");
  console.log("Test 16 passed.");
} catch (error) {
  console.error("Test 16 failed.", error.message);
}
