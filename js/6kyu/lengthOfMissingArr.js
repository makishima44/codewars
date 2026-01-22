// Task: Length of missing array
// Link: https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611/train/javascript

function getLengthOfMissingArray(arrayOfArrays) {
  if (!arrayOfArrays || arrayOfArrays.length === 0) {
    return 0;
  }

  for (let arr of arrayOfArrays) {
    if (!arr) {
      return 0;
    }

    if (arr.length === 0) {
      return 0;
    }
  }

  const sortedArraysLength = arrayOfArrays.map((el) => el.length).sort((a, b) => a - b);

  for (let i = 0; i < sortedArraysLength.length; i++) {
    if (sortedArraysLength[i] + 1 !== sortedArraysLength[i + 1]) return sortedArraysLength[i] + 1;
  }
}
