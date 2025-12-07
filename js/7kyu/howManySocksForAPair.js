// Task: How many socks for a pair?
// Link: https://www.codewars.com/kata/6863033d9c452af74e0983b7/train/javascript

function socks(colours, pairs) {
  if (colours === 1) return pairs * 2;
  return pairs * 2 + colours - 1;
}
