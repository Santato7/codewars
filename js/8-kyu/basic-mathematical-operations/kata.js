function basicOp(operation, value1, value2) {
  const handler = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
  };

  return handler[operation](value1, value2);
}

module.exports = basicOp;
