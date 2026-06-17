// Task: Organise duplicate numbers in list
// Link: https://www.codewars.com/kata/5884b6550785f7c58f000047/train/javascript

function group(arr) {
  const map = new Map();

  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, [num]);
    } else {
      map.get(num).push(num);
    }
  }

  return [...map.values()];
}

