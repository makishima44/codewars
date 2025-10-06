// Task: sPoNgEbOb MeMe
// Link: https://www.codewars.com/kata/5982619d2671576e90000017/train/javascript

function spongeMeme(sentence) {
  return sentence
    .split("")
    .map((el, index) => (index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()))
    .join("");
}
