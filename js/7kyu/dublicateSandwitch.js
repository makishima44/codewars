// Task: Duplicate sandwich
// Link: https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript

function duplicateSandwich(a) {
  const isString = typeof a === "string";
  const arr = isString ? a.split("") : a;

  const dup = arr.find((v, i) => arr.indexOf(v) !== i);
  const result = arr.slice(arr.indexOf(dup) + 1, arr.lastIndexOf(dup));

  return isString ? result.join("") : result;
}
