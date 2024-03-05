// Sum Numbers
function sum(numbers) {
  "use strict";
  return numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
}
