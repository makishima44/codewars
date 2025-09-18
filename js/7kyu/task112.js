function isNice(arr) {
  if (arr.length === 0) return false;
  return arr.every((el, _id, array) => array.includes(el + 1) || array.includes(el - 1));
}
