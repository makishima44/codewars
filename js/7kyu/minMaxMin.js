// Task: MinMaxMin: Bounded Nums
// Link: https://www.codewars.com/kata/58d3487a643a3f6aa20000ff/train/javascript

function minMinMax(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  for (let i = min + 1; i < max; i++) {
    if (!array.includes(i)) {
      return [min, i, max];
    }
  }

  return [min, null, max];
}
