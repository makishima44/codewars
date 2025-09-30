// Task: String matchup
// Link: https://www.codewars.com/kata/59ca8e8e1a68b7de740001f4/train/javascript

function solve(a, b) {
  return b.map((el) => a.filter((x) => x === el).length);
}
