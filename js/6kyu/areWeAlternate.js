// Task: Are we alternate?
// Link: https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript

function isAlt(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const normalizedWord = word.toLowerCase();

  for (let i = 1; i < normalizedWord.length; i++) {
    const prevIsVowel = vowels.includes(normalizedWord[i - 1]);
    const currentIsVowel = vowels.includes(normalizedWord[i]);

    if (prevIsVowel === currentIsVowel) return false;
  }
  return true;
}
