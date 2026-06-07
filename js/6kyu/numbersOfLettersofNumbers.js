// Task: Numbers of Letters of Numbers
// Link: https://www.codewars.com/kata/599febdc3f64cd21d8000117/train/javascript

function numbersOfLetters(integer) {
  const digits = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  function numberToWord(num) {
    return String(num)
      .split("")
      .map((digit) => digits[digit])
      .join("");
  }

  const result = [];
  let word = numberToWord(integer);

  while (word !== "four") {
    result.push(word);
    word = numberToWord(word.length);
  }

  result.push("four");

  return result;
}
