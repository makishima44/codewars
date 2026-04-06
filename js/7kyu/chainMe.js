// Task: Chain me
// Link: https://www.codewars.com/kata/54fb853b2c8785dd5e000957/train/javascript

function chain(input, fs) {
  let result = input;

  for (let fn of fs) {
    result = fn(result);
  }

  return result;
}
