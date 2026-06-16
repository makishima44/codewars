// Task: Numbers of Letters of Numbers
// Link: https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

function stringExpansion(s) {
  let result = "";
  let multiplier = 1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(char)) {
      multiplier = Number(char);
    } else {
      result += char.repeat(multiplier);
    }
  }

  return result;
}
