function specialNumber(n) {
  const arrNum = String(n).split("").map(Number);
  return arrNum.every((num) => num >= 0 && num <= 5) ? "Special!!" : "NOT!!";
}
