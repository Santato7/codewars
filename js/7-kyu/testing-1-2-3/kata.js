var number = function (array) {
  return array.map((x, i) => (x = `${i + 1}: ${x}`));
};

module.exports = number;
