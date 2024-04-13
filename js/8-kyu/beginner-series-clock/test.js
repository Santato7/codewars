const assert = require("assert");
const past = require("./kata.js");

function describe(description, testFn) {
  console.log(description);
  testFn();
}

function it(description, testFn) {
  try {
    testFn();
    console.log(`  ${description} passed.`);
  } catch (error) {
    console.error(`  ${description} failed: ${error.message}`);
  }
}

describe("Fixed Tests", () => {
  it("Tests", () => {
    assert.strictEqual(past(0, 1, 1), 61000);
    assert.strictEqual(past(1, 1, 1), 3661000);
    assert.strictEqual(past(0, 0, 0), 0);
    assert.strictEqual(past(1, 0, 1), 3601000);
    assert.strictEqual(past(1, 0, 0), 3600000);
  });
});
