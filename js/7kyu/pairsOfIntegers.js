// Task: Pairs of integers from 0 to n
// Link: https://www.codewars.com/kata/588e27b7d1140d31cb000060/train/javascript

function generatePairs(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      let arr = [i, j];
      result.push(arr);
    }
  }

  return result;
}
