function sumArray(array) {
  return !array || array.length <= 2
    ? 0
    : array.reduce((prev, curr) => prev + curr, 0) -
        Math.min(...array) -
        Math.max(...array);
}

module.exports = sumArray;
