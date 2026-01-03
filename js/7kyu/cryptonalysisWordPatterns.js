// Task: Cryptanalysis Word Patterns
// Link: https://www.codewars.com/kata/5f3142b3a28d9b002ef58f5e/train/javascript

function wordPattern(word) {
  const obj = {};
  const result = [];
  let counter = 0;

  for (let letter of word.toLowerCase()) {
    if (obj[letter] === undefined) {
      obj[letter] = counter++;
    }
    result.push(obj[letter]);
  }

  return result.join(".");
}
