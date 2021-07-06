const calculator = (function () {
  function add(a, b) {
    return a + b;
  }
  function subtract(b, a) {
    return b - a;
  }
  return {
    add,
    subtract,
  };
})();

export { calculator };
