// Task: Coding 3min: Bug in Apple
// Link: https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

function sc(apple) {
  const result = [];

  apple.forEach((el, index) => {
    if (el.includes("B")) {
      result.push(index, el.indexOf("B"));
    }
  });

  return result;
}
