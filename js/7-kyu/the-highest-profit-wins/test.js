const assert = require("assert");
const minMax = require("./kata.js");

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

describe("minMax", () => {
  const testCases = [
    [
      [1, 2, 3, 4, 5],
      [1, 5],
    ],
    [
      [2334454, 5],
      [5, 2334454],
    ],
    [[5], [5, 5]],
  ];
  for (const [input, expected] of testCases) {
    it(`should work for ${JSON.stringify(input)}`, () => {
      assert.deepStrictEqual(minMax(input), expected);
    });
  }
});
