function topSecret(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      let shifted = code - 3;
      if (shifted < 65) shifted += 26;
      result += String.fromCharCode(shifted);
    } else if (code >= 97 && code <= 122) {
      let shifted = code - 3;
      if (shifted < 97) shifted += 26;
      result += String.fromCharCode(shifted);
    } else {
      result += char;
    }
  }

  return result;
}
