function validateWord(s) {
  const sLower = s.toLowerCase();
  let count = {};
  for (let i = 0; i < sLower.length; i++) {
    if (count[sLower[i]]) {
      count[sLower[i]] += 1;
    } else {
      count[sLower[i]] = 1;
    }
  }
  const arrCount = Object.values(count);
  return arrCount.length === 0 ? true : arrCount.every((el) => el === arrCount[0]);
}
