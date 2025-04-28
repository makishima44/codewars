function unusedDigits(...arr) {
  const used = new Set([...arr.map(String).join("")]);
  const result = [];

  for (let i = 0; i <= 9; i++) {
    if (!used.has(i.toString())) {
      result.push(i);
    }
  }
  return result.join("");
}
