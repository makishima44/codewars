// Task: Prime Factors
// https://www.codewars.com/kata/542f3d5fd002f86efc00081a/train/javascript

function primeFactors(n) {
  const result = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return result;
}
