// Task: String average
// https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript

function averageString(str) {
  if (str.length === 0) return "n/a";

  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const numsArr = str.split(" ");

  if (numsArr.some((number) => !(number in numbers))) return "n/a";

  const sum = numsArr.reduce((acc, number) => acc + numbers[number], 0);
  const average = Math.floor(sum / numsArr.length);

  return Object.entries(numbers).find((key, number) => number === average)?.[0];
}


