// Task: Find the unique number
// Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  const sortArr = arr.sort((a, b) => a - b);
  if (sortArr[0] !== sortArr[1]) {
    return sortArr[0];
  }

  return sortArr[sortArr.length - 1];
}
