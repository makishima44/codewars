// Task: Simple letter removal
// Link: https://www.codewars.com/kata/5b728f801db5cec7320000c7/train/javascript

function solve(s, k) {
  const arr = s.split("");

  for (let i = 97; i < 122 && k > 0; i++) {
    const char = String.fromCharCode(i);

    for (let j = 0; j < arr.length && k > 0; j++) {
      if (arr[j] === char) {
        arr.splice(j, 1);
        k--;
        j--;
      }
    }
  }
  
  if (k > 0) {
    arr.splice(0, k);
  }

  return arr.join("");
}
