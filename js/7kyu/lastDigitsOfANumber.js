// Task: last digits of a number
// Link: https://www.codewars.com/kata/5cd5ba1ce4471a00256930c0/train/javascript

function lastDigit(n, d) {
  if (d <= 0) return [];
  const arr = String(n).split("").map(Number);

  if (d > arr.length) return arr;

  const result = [];
  const startIndex = arr.length - d;

  for (let i = startIndex; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}

console.log(lastDigit(1234567, 4));
