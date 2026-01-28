// Task: longest_palindrome
// Link: https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

function longestPalindrome(s) {
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const subStr = s.substring(i, j + 1);

      let isPalindrome = true;

      for (let k = 0; k < Math.floor(subStr.length / 2); k++) {
        if (subStr[k] !== subStr[subStr.length - 1 - k]) {
          isPalindrome = false;
          break;
        }
      }
      if (isPalindrome && subStr.length > longest.length) {
        longest = subStr;
      }
    }
  }

  return longest.length;
}
