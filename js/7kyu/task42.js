function vowelOne(s) {
  let result = s.replace(/[^aeiou]/gi, "0");
  return result.replace(/[aeiou]/gi, "1");
}
