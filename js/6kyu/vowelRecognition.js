// Task: Vowel Recognition
// Link: https://www.codewars.com/kata/5bed96b9a68c19d394000b1d/train/javascript

function vowelRecognition(input) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const n = input.length;

  let total = 0;

  for (let i = 0; i < n; i++) {
    if (vowels.has(input[i])) {
      total += (i + 1) * (n - i);
    }
  }

  return total;
}
