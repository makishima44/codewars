function getStrings(city) {
  const cityWithoutSpaces = city.replaceAll(" ", "").toLowerCase();
  let letters = {};

  for (let i = 0; i < cityWithoutSpaces.length; i++) {
    if (letters[cityWithoutSpaces[i]]) {
      letters[cityWithoutSpaces[i]] += "*";
    } else {
      letters[cityWithoutSpaces[i]] = "*";
    }
  }

  return Object.entries(letters)
    .map(([letter, star]) => `${letter}:${star}`)
    .join(",");
}


