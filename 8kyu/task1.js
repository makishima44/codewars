function first(arr, n) {
  if (n === undefined) return arr.slice(0, 1);
  if (n <= 0) return [];
  return arr.slice(0, n);
}
