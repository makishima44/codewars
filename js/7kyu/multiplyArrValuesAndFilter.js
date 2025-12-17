// Task: Multiply array values and filter non-numeric
// Link: https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript

function multiplyAndFilter(array, multiplier) {
  const filteredArr = array.filter((el) => typeof el === "number");
  return filteredArr.map((el) => el * multiplier);
}
