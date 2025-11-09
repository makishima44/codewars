// Task: Sum of a nested list
// Link: https://www.codewars.com/kata/5a15a4db06d5b6d33c000018/train/javascript

const sumNested = (arr) => {
  return arr.flat(Infinity).reduce((sum, el) => sum + el, 0);
};
