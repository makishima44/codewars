function initializeNames(name) {
  const nameArr = name.split(" ");
  if (nameArr.length <= 2) return name;

  return nameArr.map((el, index) => ((index === 0) | (index === nameArr.length - 1) ? el : `${el[0]}.`)).join(" ");
}
