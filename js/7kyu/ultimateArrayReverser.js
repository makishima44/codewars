// Task: Ultimate Array Reverser
// Link: https://www.codewars.com/kata/5c3433a4d828182e420f4197/train/javascript

function ultimateReverse(arr) {
  const s = arr.join("");
  let pos = s.length;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const len = arr[i].length;
    const part = s.slice(pos - len, pos);
    result.push(part.split("").reverse().join(""));
    pos -= len;
  }

  return result;
}
