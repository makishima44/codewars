// Task: Test's results
// Link: https://www.codewars.com/kata/599db0a227ca9f294b0000c8/train/javascript

function testResult(array) {
  const classAverage = Number((array.reduce((sum, el) => sum + el, 0) / array.length).toFixed(3));
  const marks = {
    h: 0,
    a: 0,
    l: 0,
  };

  const high = new Set([9, 10]);
  const average = new Set([7, 8]);
  const low = new Set([1, 2, 3, 4, 5, 6]);

  for (let i = 0; i < array.length; i++) {
    if (high.has(array[i])) {
      marks.h += 1;
    } else if (average.has(array[i])) {
      marks.a += 1;
    } else if (low.has(array[i])) {
      marks.l += 1;
    }
  }

  const resultArr = [classAverage, marks];

  if (marks.a === 0 && marks.l === 0) {
    resultArr.push("They did well");
  }

  return resultArr;
}
