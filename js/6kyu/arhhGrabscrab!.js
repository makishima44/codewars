// Task: Arrh, grabscrab!
// Link: https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript

function grabscrab(anagram, dictionary) {
  const normalizedArr = dictionary.map((el) => el.split("").sort().join(""));
  const sortedAnagram = anagram.split("").sort().join("");
  const result = [];

  for (let i = 0; i < dictionary.length; i++) {
    if (sortedAnagram === normalizedArr[i]) {
      result.push(dictionary[i]);
    }
  }

  return result;
}
