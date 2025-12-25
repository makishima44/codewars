// Task: Simple Fun #144: Distinct Digit Year
// Link: https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

function distinctDigitYear(year) {
  let currentYear = year + 1;

  while (true) {
    const yearStr = String(currentYear);
    const unique = new Set(yearStr);

    if (unique.size === 4) {
      return currentYear;
    }
    currentYear++;
  }
}


