const assert = require("assert");
const lovefunc = require("./kata.js");

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

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1, 4), true);
    assert.strictEqual(lovefunc(2, 2), false);
    assert.strictEqual(lovefunc(0, 1), true);
    assert.strictEqual(lovefunc(0, 0), false);
  });
});
