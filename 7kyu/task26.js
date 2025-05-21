function insertDash(num) {
  const str = String(num);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      result += `${str[i]}-`;
    } else {
      result += [str[i]];
    }
  }
  return result.endsWith("-") ? result.slice(0, -1) : result;
}
