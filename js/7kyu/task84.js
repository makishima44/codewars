function lastSurvivor(letters, coords) {
  let str = letters;

  for (let i = 0; i < coords.length; i++) {
    str = str.slice(0, coords[i]) + str.slice(coords[i] + 1);
  }

  return str;
}
