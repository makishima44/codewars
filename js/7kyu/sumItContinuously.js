// Task: Sum it continuously
// Link: https://www.codewars.com/kata/59b44d00bf10a439dd00006f/train/javascript

function add(arr) {
  const resultArr = [];

  for (let i = 1; i <= arr.length; i++) {
    resultArr.push(arr.slice(0, i).reduce((sum, el) => sum + el, 0));
  }

  return resultArr;
}
