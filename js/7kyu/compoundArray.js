// Task: CompoundArray
// Link: https://www.codewars.com/kata/56044de2aa75e28875000017/train/javascript

function compoundArray(a, b) {
  const result = [];
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < a.length) {
      result.push(a[i]);
    }
    if (i < b.length) {
      result.push(b[i]);
    }
  }

  return result;
}
