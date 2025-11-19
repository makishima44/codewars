// Task: Swap two elements
// Link: https://www.codewars.com/kata/5a3f4eace1ce0eeda600003d/train/javascript

function swapTwo(array, a, b) {
  const arrayCopy = array;

  let positionA = arrayCopy.indexOf(a);
  let positionB = arrayCopy.lastIndexOf(b);
  arrayCopy[positionA] = b;
  arrayCopy[positionB] = a;

  return arrayCopy;
}
