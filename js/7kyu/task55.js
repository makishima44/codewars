function tidyNumber(n) {
  const numArr = n.toString().split("").map(Number);

  for (let i = 1; i < numArr.length; i++) {
    if (numArr[i - 1] > numArr[i]) return false;
  }

  return true;
}
