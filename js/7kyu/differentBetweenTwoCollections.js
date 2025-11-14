// Task: Difference between two collections
// Link: https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript

function diff(a, b) {
  let diffArr = [];

  a.forEach((el) => (!b.includes(el) ? diffArr.push(el) : ""));
  b.forEach((el) => (!a.includes(el) ? diffArr.push(el) : ""));

  return [...new Set(diffArr)].sort();
}
