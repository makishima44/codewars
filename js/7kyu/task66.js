function solve(a, b) {
  let result = "";

  for (let char of a) {
    if (!b.includes(char)) {
      result += char;
    }
  }

  for (let char of b) {
    if (!a.includes(char)) {
      result += char;
    }
  }

  return result;
}
