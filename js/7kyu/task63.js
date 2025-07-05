function bingo(a) {
  const bingo = ["b", "i", "n", "g", "o"];
  const letters = a.map((el) => String.fromCharCode(el + 64).toLowerCase());
  return bingo.every((el) => letters.includes(el)) ? "WIN" : "LOSE";
}
