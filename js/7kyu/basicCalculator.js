// Task: Basic Calculator
// Link: https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

function calculate(num1, operation, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      if (num2 === 0) return null;
      return num1 / num2;
      break;
    default:
      return null;
  }
}
