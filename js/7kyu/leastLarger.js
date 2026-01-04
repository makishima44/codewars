// Task: Least Larger
// Link: https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

function leastLarger(a, i) {
  const largerNumbers = a.filter((el) => el > a[i]).sort((a, b) => a - b);
  return a.indexOf(largerNumbers[0]);
}

