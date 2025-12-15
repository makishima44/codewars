// Task: Ones' Complement
// Link: https://www.codewars.com/kata/59b11f57f322e5da45000254/train/javascript

function onesComplement(n) {
  return n.replaceAll(/./g, (char) => (char === "0" ? "1" : "0"));
}
