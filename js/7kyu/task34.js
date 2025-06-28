function spacey(array) {
  let str = array[0];
  let result = [array[0]];
  for (let i = 1; i < array.length; i++) {
    str += array[i];
    result.push(str);
  }
  return result;
}
