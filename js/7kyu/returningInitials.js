// Task: C.Wars
// Link: https://www.codewars.com/kata/55968ab32cf633c3f8000008/train/javascript

function initials(n) {
  const words = n.split(" ");
  return words
    .map((word, indx) => {
      if (indx === words.length - 1) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word[0].toUpperCase() + ".";
      }
    })
    .join("");
}
