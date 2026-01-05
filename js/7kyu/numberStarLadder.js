// Task: Number-Star ladder
// Link: https://www.codewars.com/kata/5631213916d70a0979000066/train/javascript

function pattern(n) {
  let str = "1";

  for (let i = 2; i <= n; i++) {
    str += `\n${1}${"*".repeat(i - 1)}${i}`;
  }
  return str;
}

