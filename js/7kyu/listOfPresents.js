// Task: List of Presents
// Link: https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript

function howManyGifts(maxBudget, gifts) {
  const sortedArr = gifts.sort((a, b) => a - b);
  let spendMany = 0;
  let count = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (spendMany + sortedArr[i] <= maxBudget) {
      count++;
      spendMany += sortedArr[i];
    }
  }

  return count;
}

console.log(howManyGifts(20, [13, 2, 4, 6, 1]));
