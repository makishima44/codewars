function solve(arr) {
  let sorted = arr.slice().sort((a, b) => a - b);
  let result = [];

  while (sorted.length) {
    if (sorted.length) result.push(sorted.pop());
    if (sorted.length) result.push(sorted.shift());
  }

  return result;
}
