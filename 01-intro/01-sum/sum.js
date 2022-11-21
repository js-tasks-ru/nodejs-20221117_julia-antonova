function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('нужны числа');
  } else {
    return a + b;
  }
}

module.exports = sum;
