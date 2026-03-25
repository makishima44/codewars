// Task: Inside Out Strings
// Link: https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/train/javascript

function insideOut(x) {
  const arr = x.split(" ");
  let result = "";

  for (const word of arr) {
    if (word.length < 4) {
      result += word + " ";
    } else {
      const mid = Math.floor(word.length / 2);
      if (word.length % 2 === 0) {
        result += `${word
          .slice(0, word.length / 2)
          .split("")
          .reverse()
          .join("")}${word
          .slice(word.length / 2)
          .split("")
          .reverse()
          .join("")} `;
      } else {
        result += `${word.slice(0, mid).split("").reverse().join("")}${word[mid]}${word
          .slice(mid + 1)
          .split("")
          .reverse()
          .join("")} `;
      }
    }
  }

  return result.slice(0, -1);
}

console.log(insideOut("   "));
