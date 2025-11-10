// Task: Only one
// Link: https://www.codewars.com/kata/5734c38da41454b7f700106e/train/javascript

function onlyOne() {
  const sort = [...arguments].filter((el) => el === true);
  return sort.length === 1 ? true : false;
}
