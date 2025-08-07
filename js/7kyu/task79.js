function secondSymbol(s, symbol) {
  count = 0;
  index = 0;

  for (let i = 0; i < s.length; i++) {
    if (count < 2) {
      if (s[i] === symbol) {
        count += 1;
        index = i;
      }
    }
  }

  return count === 2 ? index : -1;
}

console.log(
  secondSymbol("xdihCDljhfNJJuQaKYjnHXwpMcpOuVxALpYBdReWuSgNNijIJxnCTymrgjskBPBhrhaFyuEVeowmcEeREwGhGn ", "L")
);
