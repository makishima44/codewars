function freqSeq(str, sep) {
  const count = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  }

  return str
    .split("")
    .map((el) => count[el])
    .join(sep);
}
