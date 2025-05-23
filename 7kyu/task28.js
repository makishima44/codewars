function consecutive(array) {
  if (array.length <= 1) return 0;
  const sortArr = array.sort((a, b) => a - b);
  const min = sortArr[0];
  const max = sortArr[sortArr.length - 1];
  const currentCount = max - min + 1;

  return currentCount - sortArr.length;
}
