// Task: Simplify the number!
// Link: https://www.codewars.com/kata/5800b6568f7ddad2c10000ae/train/javascript

function simplify(number) {
  if (number === 0) return "";

  let str = String(number);
  let count = str.length - 1;
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const digit = str[i];

    if (digit === "0") {
      count--;
      continue;
    }

    if (count === 0) {
      result.push(digit);
    } else {
      result.push(`${digit}*1${"0".repeat(count)}`);
    }

    count--;
  }
  return result.join("+");
}
