// Task: Where is my parent!?(cry)
// Link: https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

function findChildren(dancingBrigade) {
  const upperCaseOnly = dancingBrigade.match(/[A-Z]/g).join("");
  const lowerCaseOnly = dancingBrigade.match(/[a-z]/g).join("");
  const charMap = new Map();
  const result = [];

  for (const char of upperCaseOnly) {
    charMap.set(char, []);
  }

  for (let char of upperCaseOnly) {
    for (let i = 0; i < lowerCaseOnly.length; i++) {
      if (char === lowerCaseOnly[i].toUpperCase()) {
        charMap.get(char).push(lowerCaseOnly[i]);
      }
    }
  }

  for (const el of charMap) {
    result.push([el[0], el[1]].flat());
  }

  return result.sort().flat().join("");
}


