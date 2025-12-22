// Task: Sum of Array Averages
// Link: https://www.codewars.com/kata/56d5166ec87df55dbe000063/train/javascript

function sumAverage(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    let subArraySum = 0;

    for (let j = 0; j < subArray.length; j++) {
      subArraySum += subArray[j];
    }

    totalSum += subArraySum / subArray.length;
  }

  return Math.floor(totalSum);
}
