function numObj(s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    result.push({ [s[i]]: String.fromCharCode(s[i]) });
  }

  return result;
}
