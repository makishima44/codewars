// Task: Alphabetically ordered
// Link: https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript

function alphabetic(s) {
  let flag = true;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i].charCodeAt(0) > s[i + 1].charCodeAt(0)) {
      flag = false;
    }
  }

  return flag;
}
