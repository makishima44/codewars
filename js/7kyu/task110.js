function isDivisible() {
  const first = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (first % arguments[i] !== 0) {
      return false;
    }
  }
  return true;
}
