function filterLongWords(sentence, n) {
  const arr = sentence.split(" ");
  return arr.filter((el) => el.length > n);
}
