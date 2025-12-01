// Task: Simple Fun #124: Lamps
// Link: https://www.codewars.com/kata/58a3c1f12f949e21b300005c/train/javascript

function findArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0) return [];
  return arr2.map((el) => arr1[el]);
}
