function hydrate(s) {
  const sumDrinks = s
    .match(/[0-9]/g)
    .map(Number)
    .reduce((sum, num) => sum + num, 0);

  return sumDrinks > 1 ? `${sumDrinks} glasses of water` : `${sumDrinks} glass of water`;
}
