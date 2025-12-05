// Task: Plus - minus - plus - plus - ... - Count
// Link: https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript

function catchSignChange(arr) {
  if (arr.length <= 1) return 0;

  let count = 0;
  let prevPositive = arr[0] >= 0;

  for (let i = 1; i < arr.length; i++) {
    let currentPositive = arr[i] >= 0;
    if (currentPositive !== prevPositive) {
      count++;
      prevPositive = currentPositive;
    }
  }

  return count;
}

