function padIt(str, n) {
  let count = 1;
  let result = str;

  while (count <= n) {
    count++;
    if (count % 2 === 0) {
      result = "*" + result;
    } else {
      result = result + "*";
    }
  }

  return result;
}
