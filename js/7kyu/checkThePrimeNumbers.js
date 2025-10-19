// Task: MinMaxMin: Bounded Nums
// Link: https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}
