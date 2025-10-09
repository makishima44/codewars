// Task: Fruit string calculator
// Link: https://www.codewars.com/kata/57b9fc5b8f5813384a000aa3/train/javascript

function calculate(string) {
  const arr = string.split(" ");
  const loses = arr.includes("loses");
  const numbersArr = string.match(/\d+/g, "").map(Number);

  return loses ? numbersArr[0] - numbersArr[1] : numbersArr[0] + numbersArr[1];
}

