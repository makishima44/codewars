// Task: Even odd disparity
// Link: https://www.codewars.com/kata/59c62f1bdcc40560a2000060/train/javascript

function solve(a) {
  const filteredArr = a.filter((el) => typeof el === "number");

  let odd = 0;
  let even = 0;

  filteredArr.forEach((el) => (el % 2 === 0 ? even++ : odd++));

  return even - odd;
}
