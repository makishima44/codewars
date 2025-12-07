// Task: Multiply Adjacent Digits
// Link: https://www.codewars.com/kata/67191920c29c7e09d9f40707/train/javascript

function digitMultiplication(expr) {
  const arr = expr.split(/([+/-])/).map((el) =>
    el.length > 1
      ? el
          .split("")
          .map(Number)
          .reduce((el, sum) => el * sum)
      : el !== "+" && el !== "-"
      ? Number(el)
      : el
  );

  let result = arr[0];

  for (let i = 1; i < arr.length - 1; i += 2) {
    if (arr[i] === "+") {
      result += arr[i + 1];
    } else {
      result -= arr[i + 1];
    }
  }

  return result;
}
