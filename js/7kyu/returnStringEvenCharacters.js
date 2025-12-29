// Task: Inverting a Hash
// Link: https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript

function evenChars(string) {
  if (string.length < 2 || string.length > 100) return "invalid string";
  return string.split("").filter((_, index) => index % 2 !== 0);
}
