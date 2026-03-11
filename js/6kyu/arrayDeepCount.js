// Task: Array Deep Count
// Link: https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

function deepCount(a) {
  let count = 0;

  for (let item of a) {
    if (Array.isArray(item)) {
      count += 1 + deepCount(item);
    } else {
      count++;
    }
  }
  return count;
}
