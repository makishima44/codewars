// Task: All Star Code Challenge #16
// Link: https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

function noRepeat(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) return str[i];
  }
}
