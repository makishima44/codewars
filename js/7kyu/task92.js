function dotCalculator(equation) {
  const arr = equation.split(" ");
  const operator = arr[1];
  let result = 0;

  switch (operator) {
    case "+":
      result = arr[0].length + arr[2].length;
      break;
    case "-":
      result = arr[0].length - arr[2].length;
      break;
    case "*":
      result = arr[0].length * arr[2].length;
      break;
    case "//":
      result = arr[0].length / arr[2].length;
      break;
  }

  return ".".repeat(result);
}
