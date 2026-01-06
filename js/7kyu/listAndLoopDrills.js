// Task: Thinkful - List and Loop Drills: Lists of lists
// Link: https://www.codewars.com/kata/586e1d458cb711f0a800033b/train/javascript

function processData(data) {
  return data.map((el) => el[0] - el[1]).reduce((sum, el) => sum * el);
}
