// Task: Name Array Capping
// Link: https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

function capMe(names) {
  return names.map((name) => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());
}
