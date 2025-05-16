function alternate(n, firstValue, secondValue) {
  let result = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) result.push(firstValue);
    else result.push(secondValue);
  }

  return result;
}
