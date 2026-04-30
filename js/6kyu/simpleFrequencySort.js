// Task: Simple frequency sort
// Link: https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript

function solve(arr) {
  const obj = new Map();

  for (const value of arr) {
    if (obj.has(value)) {
      obj.set(value, obj.get(value) + 1);
    } else {
      obj.set(value, 1);
    }
  }

  const newArr = Array.from(obj);

  const sortedArr = newArr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });

  return sortedArr.map((el) => Array(el[1]).fill(el[0])).flat();
}
