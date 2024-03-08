function findNeedle(haystack) {
  return `found the needle at position ${haystack.findIndex(
    (x) => x === "needle"
  )}`;
}

module.exports = findNeedle;
