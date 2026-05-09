// Task: Fold an array
// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript

function foldArray(array, runs) {
  let currentArr = [...array];
  let step = runs;

  while (step > 0) {
    const len = currentArr.length;

    if (len <= 1) {
      break;
    }

    const newLen = Math.ceil(len / 2);
    const nextArr = [];

    for (let i = 0; i < newLen; i++) {
      const leftIndex = i;
      const rightIndex = len - 1 - i;

      if (leftIndex === rightIndex) {
        nextArr.push(currentArr[leftIndex]);
      } else {
        nextArr.push(currentArr[leftIndex] + currentArr[rightIndex]);
      }
    }

    currentArr = nextArr;

    step--;
  }

  return currentArr;
}


