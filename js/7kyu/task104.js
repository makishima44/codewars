function solve(str) {
  const reversedLetters = str.replace(/\s/g, "").split("").reverse();

  let result = "";
  let index = 0;

  for (let char of str) {
    if (char === " ") result += " ";
    else {
      result += reversedLetters[index];
      index++;
    }
  }

  return result;
}


