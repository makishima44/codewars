// Task: Failed Sort - Bug Fixing #4
// Link: https://www.codewars.com/kata/55c7f90ac8025ebee1000062/train/javascript

let sortArray = function (value) {
  return value
    .split("")
    .sort((c, p) => c - p)
    .join("");
};
