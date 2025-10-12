// Task: Calculate mean and concatenate string
// Link: https://www.codewars.com/kata/56f7493f5d7c12d1690000b6/train/javascript

function mean(lst) {
  const concString = lst.join("").replace(/[0-9]/g, "");
  const calcMean =
    lst
      .join("")
      .replace(/[a-zA-Z]/g, "")
      .split("")
      .map(Number)
      .reduce((acc, el) => (acc += el), 0) / 10;

  return [calcMean, concString];
}
