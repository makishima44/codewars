// Task: Numbers of Letters of Numbers
// Link: https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

function group(arr) {
  const map = new Map();

  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, [num]);
    } else {
      map.get(num).push(num);
    }
  }

  return [...map.values()];
}

