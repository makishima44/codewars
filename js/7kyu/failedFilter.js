// Task: Failed Filter - Bug Fixing #3
// Link: https://www.codewars.com/kata/55c606e6babfc5b2c500007c/train/javascript

let filterNumbers = function (str) {
  return str
    .split("")
    .filter((c) => {
      const parsed = parseInt(c);
      return !parsed && parsed !== 0;
    })
    .join("");
};

