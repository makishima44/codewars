// Task: Sum consecutives
// Link: https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript

function sumConsecutives(s) {
  const result = [];
  let sum = s[0];

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      sum += s[i];
    } else {
      result.push(sum);
      sum = s[i];
    }
  }

  return result;
}
