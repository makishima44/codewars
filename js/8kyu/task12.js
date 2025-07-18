function howManySmaller(arr, n) {
  const fixedArr = arr.map((el) => el.toFixed(2)).map(Number);
  const filteredArr = fixedArr.filter((el) => el < n);
  return filteredArr.length;
}

