// Task: Calculate String Rotation
// Link: https://www.codewars.com/kata/5596f6e9529e9ab6fb000014/train/javascript

function shiftedDiff(first, second) {
  if (first.length !== second.length) return -1;
  if (first === second) return 0;

  const doubled = first + first;
  const index = doubled.indexOf(second);

  if (index === -1) return -1;

  return first.length - index;
}
