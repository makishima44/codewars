// Task: Equal Sides Of An Array
// Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

function findEvenIndex(arr) {
  const totalSum = arr.reduce((sum, el) => sum + el, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSum - arr[i];
    if (rightSum === leftSum) {
      return i;
    } else {
      leftSum += arr[i];
    }
  }
  return -1;
}
