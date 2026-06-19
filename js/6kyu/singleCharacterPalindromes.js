// Task: Single character palindromes
// Link: https://www.codewars.com/kata/5a2c22271f7f709eaa0005d3/train/javascript

function solve(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      let l1 = left + 1;
      let r1 = right;
      let removeLeft = true;

      while (l1 < r1) {
        if (s[l1] !== s[r1]) {
          removeLeft = false;
          break;
        }

        l1++;
        r1--;
      }

      let l2 = left;
      let r2 = right - 1;
      let removeRight = true;

      while (l2 < r2) {
        if (s[l2] !== s[r2]) {
          removeRight = false;
          break;
        }

        l2++;
        r2--;
      }

      return removeLeft || removeRight ? "remove one" : "not possible";
    }
    left++;
    right--;
  }
  return "OK";
}


