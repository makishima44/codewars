// Task: Double Every Other
// Link: https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

function doubleEveryOther(a) {
  return a.map((el, index) => (index % 2 === 0 ? el : el * 2));
}
