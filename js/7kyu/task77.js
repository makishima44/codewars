function gimmeTheLetters(sp) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const firstLetter = sp[0].toLowerCase();
  const lastLetter = sp[2].toLowerCase();

  const result = alphabet.slice(alphabet.indexOf(firstLetter), alphabet.indexOf(lastLetter) + 1);

  return sp[0] === sp[0].toLowerCase() ? result : result.toUpperCase();
}
