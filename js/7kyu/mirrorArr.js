// Task: Mirror, mirror, on the wall...
// Link: https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

function mirror(data) {
  const sortedArr = [...data].sort((a, b) => a - b);
  return [...sortedArr, ...sortedArr.reverse().slice(1)];
}
