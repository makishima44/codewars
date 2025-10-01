// Task: Dominant array elements
// Link: https://www.codewars.com/kata/5a04133e32b8b998dc000089/train/javascript

function solve(arr) {
  const dominantArr = [];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    let x = arr.slice(i + 1).every((el) => num > el);
    if (x) dominantArr.push(num);
  }

  return dominantArr;
}
