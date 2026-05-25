// Task: More Zeros than Ones
// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript

function moreZeros(s) {
  const binary = s.split("").map((char) => char.charCodeAt(0).toString(2).split(""));
  const result = [];

  for (let el of binary) {
    let countOnes = 0;
    let countZeros = 0;

    for (let char of el) {
      if (char === "1") {
        countOnes++;
      } else if (char === "0") {
        countZeros++;
      }
    }

    if (countZeros > countOnes) result.push(el);
  }

  const moreZerosThanOnes = [...new Set(result.map((el) => el.join("")))];

  return moreZerosThanOnes.map((el) => String.fromCharCode(parseInt(el, 2)));
}
