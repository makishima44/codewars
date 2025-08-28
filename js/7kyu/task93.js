function minimumSteps(numbers, value) {
  const sortedArr = numbers.sort((a, b) => a - b);

  let sum = 0;
  let count = 1;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sum >= value) return count;
    sum += sortedArr[i];
    count = i;
  }
  return count;
}
console.log(minimumSteps([8, 9, 4, 2], 23));
