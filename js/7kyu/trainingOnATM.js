// Task: ATM
// Link: https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

function solve(n) {
  if (n % 10 !== 0) return -1;

  const banknotes = [500, 200, 100, 50, 20, 10];
  let count = 0;
  let remaining = n;

  for (let note of banknotes) {
    count += Math.floor(remaining / note);
    remaining %= note;
  }

  return remaining === 0 ? count : -1;
}
