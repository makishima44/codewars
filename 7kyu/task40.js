function shorterReverseLonger(a, b) {
  if (a.length === 0 && b.length === 0) return "";

  return a.length < b.length
    ? `${a}${b.split("").reverse().join("")}${a}`
    : `${b}${a.split("").reverse().join("")}${b}`;
}

