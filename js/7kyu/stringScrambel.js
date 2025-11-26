// Task: String Scramble
// Link: https://www.codewars.com/kata/5822d89270ca28c85c0000f3/train/javascript

function scramble(str, arr) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i];
  }

  return result.join("");
}

