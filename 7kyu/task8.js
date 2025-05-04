function product(string) {
  const exclamation = (string.match(/!/g) || []).length;
  const question = (string.match(/\?/g) || []).length;
  return question * exclamation;
}
