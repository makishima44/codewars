// Task: Find Screen Size
// Link: https://www.codewars.com/kata/5bbd279c8f8bbd5ee500000f/train/javascript

function findScreenHeight(width, ratio) {
  const arr = ratio.split(":").map(Number);
  const part = width / arr[0];
  return `${width}x${part * arr[1]}`;
}
