const assert = require("assert");
const filter_list = require("./kata.js");

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
      filter_list([1, 2, "a", "b"]),
      [1, 2],
      'For input [1,2,"a","b"]'
    );
    assert.deepStrictEqual(
      filter_list([1, "a", "b", 0, 15]),
      [1, 0, 15],
      'For input [1,"a","b",0,15]'
    );
    assert.deepStrictEqual(
      filter_list([1, 2, "aasf", "1", "123", 123]),
      [1, 2, 123],
      'For input [1,2,"aasf","1","123",123]'
    );
  });
});
