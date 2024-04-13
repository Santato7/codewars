const assert = require("assert");
const friend = require("./kata.js");

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
    assert.deepStrictEqual(friend(["Ryan", "Kieran", "Mark"]), [
      "Ryan",
      "Mark",
    ]);
    assert.deepStrictEqual(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), [
      "Ryan",
    ]);
    assert.deepStrictEqual(
      friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
      ["Jimm", "Cari", "aret"]
    );
    assert.deepStrictEqual(friend(["Love", "Your", "Face", "1"]), [
      "Love",
      "Your",
      "Face",
    ]);
  });
});
