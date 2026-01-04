// Task: Bubblesort Once
// Link: https://www.codewars.com/kata/56b97b776ffcea598a0006f2/train/javascript

function bubblesortOnce(a) {
  const arr = [...a];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  return arr;
}
