// Task: Number Pairs
// Link: https://www.codewars.com/kata/563b1f55a5f2079dc100008a/train/javascript

function getLargerNumbers(a, b) {
  return a.map((el, index) => (el > b[index] ? el : b[index]));
}
