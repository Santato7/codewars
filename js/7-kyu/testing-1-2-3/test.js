const assert = require("assert");
const number = require("./kata.js");

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

describe("Tests", () => {
  it("test", () => {
    assert.deepStrictEqual(
      number([]),
      [],
      "Empty array should return empty array"
    );
    assert.deepStrictEqual(
      number(["a", "b", "c"]),
      ["1: a", "2: b", "3: c"],
      "Return the correct line numbers"
    );
  });
});
