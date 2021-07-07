const calculator = (function () {
  function add(a, b) {
    return a + b;
  }

  function subtract(b, a) {
    return b - a;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(b, a) {
    if (a === 0) return "Error: can't divide by zero";
    return b / a;
  }

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

export { calculator };
