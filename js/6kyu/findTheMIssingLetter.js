// Task: Find the missing letter
// Link: https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

function findMissingLetter(array) {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));
  const normalize = array.map((el) => el.toLowerCase());
  const remainingAlphabet = letters.slice(letters.findIndex((el) => el === normalize[0]));
  let result = "";

  for (let i = 0; i < normalize.length; i++) {
    if (normalize[i] !== remainingAlphabet[i]) {
      result = remainingAlphabet[i];
      break;
    }
  }

  return array[0] === array[0].toLowerCase() ? result : result.toUpperCase();
}
