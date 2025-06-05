function isLucky(n) {
  return String(n)
    .split("")
    .map(Number)
    .reduce((sum, el) => sum + el, 0) %
    9 ===
    0
    ? true
    : false;
}
