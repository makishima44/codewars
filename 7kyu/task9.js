function scratch(lottery) {
  let bonus = 0;

  for (const string of lottery) {
    const parts = string.split(" ");

    const symbols = parts.slice(0, 3);
    const prize = Number(parts[3]);

    const allSame = symbols.every((el) => el === symbols[0]);

    if (allSame) {
      bonus += prize;
    }
  }

  return bonus;
}
