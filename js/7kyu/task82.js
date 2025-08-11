const prevMultOfThree = (n) => {
  str = n.toString();

  while (str.length > 0) {
    if (Number(str) % 3 === 0) {
      return Number(str);
    }

    str = str.slice(0, -1);
  }
  return null;
};
