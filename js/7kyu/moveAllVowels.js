// Task: Move all vowels
// Link: https://www.codewars.com/kata/56bf3287b5106eb10f000899/train/javascript

function moveVowel(input) {
  const vowels = "aeiou";
  let consonants = "";
  let vowelsPart = "";

  for (let char of input) {
    if (vowels.includes(char)) {
      vowelsPart += char;
    } else {
      consonants += char;
    }
  }

  return consonants + vowelsPart;
}
