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
