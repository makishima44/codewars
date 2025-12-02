// Task: Find array
// Link: https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055/train/javascript

function findArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return [];
  return arr2.map((el) => arr1[el]);
}
