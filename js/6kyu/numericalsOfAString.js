// Task: Numericals of a String
// Link: https://www.codewars.com/kata/5b4070144d7d8bbfe7000001/train/javascript

function numericals(s) {
  const obj = {};
  let result = "";

  for (const char of s) {
    if (obj[char]) {
      obj[char] += 1;
      result += String(obj[char]);
    } else {
      obj[char] = 1;
      result += String(obj[char]);
    }
  }

  return result;
}

