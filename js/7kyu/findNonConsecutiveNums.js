// Task: Find all non-consecutive numbers
// Link: https://www.codewars.com/kata/58f8b35fda19c0c79400020f/train/javascript

function allNonConsecutive(arr) {
  const result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      result.push({ i: i + 1, n: arr[i + 1] });
    }
  }

  return result;
}
