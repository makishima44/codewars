// Task: Sum two arrays
// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/train/javascript

function addArrays(array1, array2) {
  if (array1.length === 0 && array2.length == 0) return [];

  const arr1 = String(array1.join(""));
  const arr2 = String(array2.join(""));

  const sum = Number(arr1) + Number(arr2);
  const sumArr = String(sum).split("");

  let result = [];

  if (sumArr[0] === "-") {
    result.push(sumArr[0] + sumArr[1], ...sumArr.slice(2, sumArr.length));
  } else {
    result = sumArr;
  }

  return result.map(Number);
}

