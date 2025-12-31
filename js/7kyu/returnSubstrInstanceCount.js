// Task: Return substring instance count
// Link: https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript

function solution(fullText, search) {
  const reg = new RegExp(search, "g");
  const matches = fullText.match(reg);

  return matches ? matches.length : 0;
}
