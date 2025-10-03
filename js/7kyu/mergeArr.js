// Task: Merge two arrays
// Link: https://www.codewars.com/kata/583af10620dda4da270000c5/train/javascript

function mergeArrays(a, b) {
  const longest = a.length > b.length ? a.length : b.length;
  const result = [];

  for (let i = 0; i < longest; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }

  return result;
}


