// Task: Homogenous arrays
// Link: https://www.codewars.com/kata/57ef016a7b45ef647a00002d/train/javascript

function filterHomogenous(arrays) {
  return arrays.filter((arr) => arr.every((el) => typeof el === typeof arr[0]) && arr.length > 0);
}
