function sumOrProduct(array, n) {
  const sortedArr = array.sort((a, b) => a - b);
  const largest = sortedArr.slice(-n).reduce((sum, el) => sum + el);
  const smallest = sortedArr.slice(0, n).reduce((sum, el) => sum * el);

  if (largest === smallest) return "same";
  return largest > smallest ? "sum" : "product";
}
