// Task: Difference of 2
// Link: https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

function twosDifference(input) {
  const sortedArr = input.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedArr.length; i++) {
    let first = sortedArr[i];
    for (let j = i; j < sortedArr.length; j++) {
      if (first + 2 === sortedArr[j]) {
        result.push([first, sortedArr[j]]);
      }
    }
  }

  return result;
}

