function maxGap(numbers) {
  let maxDifferent = 0;
  const sortNumbers = numbers.sort((a, b) => b - a);

  for (let i = 0; i < sortNumbers.length - 1; i++) {
    if (sortNumbers[i] - sortNumbers[i + 1] > maxDifferent) {
      maxDifferent = sortNumbers[i] - sortNumbers[i + 1];
    }
  }
  return maxDifferent;
}
