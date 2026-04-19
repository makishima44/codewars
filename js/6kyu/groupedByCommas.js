// Task: Grouped by commas
// Link: https://www.codewars.com/kata/5274e122fc75c0943d000148/train/javascript

function groupByCommas(n) {
  const str = String(n);

  let result = "";
  let count = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    result = str[i] + result;
    count++;

    if (count === 3 && i !== 0) {
      result = "," + result;
      count = 0;
    }
  }

  return result;
}


