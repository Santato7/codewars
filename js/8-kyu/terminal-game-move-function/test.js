const assert = require("assert");
const move = require("./kata.js");

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

describe("move function", () => {
  it("basic tests", () => {
    assert.strictEqual(move(0, 4), 8);
    assert.strictEqual(move(3, 6), 15);
    assert.strictEqual(move(2, 5), 12);
  });
});
