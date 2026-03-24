// Task: Even Fibonacci Sum
// Link: https://www.codewars.com/kata/55688b4e725f41d1e9000065/train/javascript

function fibonacci(max) {
  let a = 0;
  let b = 1;
  let count = 0;

  while (a < max) {
    if (a % 2 === 0) {
      count += a;
    }

    let next = a + b;
    a = b;
    b = next;
  }

  return count;
}
