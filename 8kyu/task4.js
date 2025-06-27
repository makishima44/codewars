function twoHighest(arr) {
  const uniqueNumbers = [...new Set([...arr])].sort((a, b) => b - a);
  return uniqueNumbers.slice(0, 2);
}
