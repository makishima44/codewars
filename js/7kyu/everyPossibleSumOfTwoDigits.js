// Task: Every possible sum of two digits
// Link: https://www.codewars.com/kata/5b4e474305f04bea11000148/train/javascript

function digits(num) {
  const numArr = String(num).split("").map(Number);
  const resultArr = [];

  for (let i = 0; i < numArr.length; i++) {
    for (let j = i; j < numArr.length - 1; j++) {
      resultArr.push(numArr[i] + numArr[j + 1]);
    }
  }

  return resultArr;
}
