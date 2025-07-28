function threeInOne(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr.slice(i, i + 3));
  }
  return result.map((subArr) => subArr.reduce((a, b) => a + b, 0));
}
