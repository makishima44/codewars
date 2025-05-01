function unscrambleEggs(word) {
  const regex = /egg/gi;
  return word.replace(regex, "");
}
