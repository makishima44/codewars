function calculate(str) {
  let expression = str.replace(/plus/g, "+").replace(/minus/g, "-");
  const result = eval(expression);
  return String(result);
}
