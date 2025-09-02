function moveTen(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const index = alphabet.indexOf(s[i]);
    const newIndex = (index + 10) % alphabet.length;
    result += alphabet[newIndex];
  }

  return result;
}

