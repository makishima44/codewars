function findDup(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let answer = 0;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      answer = sortedArr[i];
    }
  }

  return answer;
}
