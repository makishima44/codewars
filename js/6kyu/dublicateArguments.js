// Task: Duplicate Arguments
// https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

function solution() {
  const arr = Array.from(arguments);
  const uniqueArr = [...new Set(arr)];

  return arr.length === uniqueArr.length ? false : true;
}
