// Task: Only Duplicates
// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

function firstDup(s) {
  return s.split("").find((char, _, arr) => {
    return arr.indexOf(char) !== arr.lastIndexOf(char);
  });
}


