function solve(s) {
  return Math.max(...s.match(/[0-9]+/g).map(Number));
}
