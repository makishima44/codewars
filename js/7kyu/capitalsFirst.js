// Task: Capitals first!
// Link: https://www.codewars.com/kata/55c353487fe3cc80660001d4/train/javascript

function capitalsFirst(str) {
  const letterWords = str.split(" ");
  const uppercase = letterWords.filter((word) => /^[A-Z]/.test(word));
  const lowercase = letterWords.filter((word) => /^[a-z]/.test(word));

  return [...uppercase, ...lowercase].join(" ");
}
