// Task: Sum of prime-indexed elements
// Link: https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript

function total(arr) {
  function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) return false;
    }

    return true;
  }

  return arr.filter((el, index) => isPrime(index)).reduce((sum, el) => sum + el, 0);
}
