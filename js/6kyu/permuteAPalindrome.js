// Task: Permute a Palindrome
// https://www.codewars.com/kata/58ae6ae22c3aaafc58000079/train/javascript

function permuteAPalindrome(input) {
  const set = new Set();

  for (const char of input) {
    if (set.has(char)) {
      set.delete(char);
    } else {
      set.add(char);
    }
  }

  return set.size <= 1;
}


