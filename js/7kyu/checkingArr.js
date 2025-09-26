// Task: Is every value in the array an array?
// Link: https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript

const arrCheck = (value) => {
  return value.every((el) => Array.isArray(el));
};
