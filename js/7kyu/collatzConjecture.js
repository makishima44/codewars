// Task: Collatz Conjecture Length
// Link: https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/javascript

function collatz(n) {
  const arr = [n];

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    arr.push(n);
  }

  return arr.length;
}
