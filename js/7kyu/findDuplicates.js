// Task: Find Duplicates
// Link: https://www.codewars.com/kata/5558cc216a7a231ac9000022/train/javascript

function duplicates(arr) {
  const uniq = new Set();
  const duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (uniq.has(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      uniq.add(arr[i]);
    }
  }

  return [...new Set(duplicates)];
}
