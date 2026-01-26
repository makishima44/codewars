// Task: Twisted Sum
// Link: https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript

function twistedSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    if (String(i).length > 1) {
      sum += String(i)
        .split("")
        .map(Number)
        .reduce((sum, el) => sum + el, 0);
    } else {
      sum += i;
    }
  }

  return sum;
}
