// Task: Roman Numerals Encoder
// Link: https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(number) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    // { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  let result = "";

  for (const { value, numeral } of romanNumerals) {
    while (number >= value) {
      result += numeral;
      number -= value;
    }
  }

  return result;
}
