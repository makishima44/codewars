// Task: Matrix Addition
// Link: https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const innerArr = [];

    for (let j = 0; j < a[i].length; j++) {
      innerArr.push(a[i][j] + b[i][j]);
    }

    result.push(innerArr);
  }

  return result;
}
