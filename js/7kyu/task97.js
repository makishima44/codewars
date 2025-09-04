function modifiedSum(a, n) {
  const sum = a.reduce((sum, el) => sum + el, 0);
  const poweredSum = a.map((el) => Math.pow(el, n)).reduce((sum, el) => sum + el, 0);

  return poweredSum - sum;
}

console.log(modifiedSum([1, 2, 3], 3));
