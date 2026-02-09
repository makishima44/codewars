// Task: Remove the parentheses
// Link: https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

function removeParentheses(s) {
  let result = "";
  let depth = 0;

  for (let char of s) {
    if (char === "(") {
      depth++;
    } else if (char === ")") {
      depth--;
    } else if (depth === 0) {
      result += char;
    }
  }

  return result;
}


