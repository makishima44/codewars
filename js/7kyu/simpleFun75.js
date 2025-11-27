// Task: Simple Fun #75: Digit Degree
// Link: https://www.codewars.com/kata/589422431a88082ea600002a/train/javascript

function digitDegree(n) {
  let count = 0;
  let current = n;

  while (current >= 10) {
    current = current
      .toString()
      .split("")
      .map(Number)
      .reduce((sum, digit) => sum + digit, 0);
    count++;
  }

  return count;
}
