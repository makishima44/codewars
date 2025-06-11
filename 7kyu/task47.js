function tripleX(str) {
  const firstX = str.indexOf("x");
  if (firstX === -1) return false;
  return str.slice(firstX, firstX + 3) === "xxx";
}
