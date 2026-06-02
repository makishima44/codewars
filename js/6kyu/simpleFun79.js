// Task: Simple Fun #79: Delete a Digit
// https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

function deleteDigit(n) {
  const str = n.toString();
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const newStr = str.slice(0, i) + str.slice(i + 1);
    const newNum = Number(newStr);

    if (newNum > max) {
      max = newNum;
    }
  }

  return max;
}
