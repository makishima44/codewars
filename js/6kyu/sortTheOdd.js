// Task: Fold an array
// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/train/javascript

function sortArray(array) {
  const odds = array.filter((n) => n % 2 !== 0).sort((a, b) => a - b);

  return array.map((n) => {
    if (n % 2 === 0) return n;
    return odds.shift();
  });
}
