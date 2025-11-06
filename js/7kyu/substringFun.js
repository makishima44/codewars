// Task: Substring fun
// Link: https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript

function nthChar(words) {
  return words.map((el, index) => el[index]).join("");
}
