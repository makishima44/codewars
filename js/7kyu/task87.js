function getTheVowels(word) {
  const vowels = ["a", "e", "i", "o", "u"];

  let count = 0;
  let expected = 0;

  for (let char of word) {
    if (char === vowels[expected]) {
      count++;
      expected = (expected + 1) % vowels.length;
    }
  }

  return count;
}


