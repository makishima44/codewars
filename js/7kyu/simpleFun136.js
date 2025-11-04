// Task: Simple Fun #136: Missing Values
// Link: https://www.codewars.com/kata/58a66c208b88b2de660000c3/train/javascript

function missingValues(arr) {
  const count = arr.reduce((acc, el) => {
    acc[el] = (acc[el] | 0) + 1;
    return acc;
  }, {});

  const filteredArr = Object.entries(count)
    .filter((el) => el[1] <= 2)
    .sort((a, b) => a[1] - b[1])
    .map((el) => Number(el[0]));

  return filteredArr[0] * filteredArr[0] * filteredArr[1];
}
