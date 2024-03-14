function squareSum(numbers) {
  return numbers.reduce((prev, curr) => prev + curr * curr, 0);
}

module.exports = squareSum;
