// Task: Integer depth
// Link: https://www.codewars.com/kata/59b401e24f98a813f9000026/train/javascript

function computeDepth(x) {
  const set = new Set();
  let count = 1;

  while (set.size !== 10) {
    let digits = String(x * count)
      .split("")
      .map(Number);

    digits.forEach((num) => set.add(num));
    count++;
  }

  return count - 1;
}


