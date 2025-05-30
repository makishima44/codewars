function solution(value) {
  let result = String(value);

  while (result.length < 5) {
    result = "0" + result;
  }

  return `Value is ${result}`;
}
