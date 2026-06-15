// Task: Numbers of Letters of Numbers
// Link: https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

var splitInteger = function (num, parts) {
  const base = Math.floor(num / parts);
  const reminder = num % parts;
  const result = new Array(parts).fill(base);

  for (let i = 0; i < reminder; i++) {
    result[i] += 1;
  }

  return result;
};
