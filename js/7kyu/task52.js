function dbSort(a) {
  const filteredNumber = a.filter((el) => typeof el === "number").sort((a, b) => a - b);
  const filteredStroke = a.filter((el) => typeof el === "string").sort();
  return [...filteredNumber, ...filteredStroke];
}
