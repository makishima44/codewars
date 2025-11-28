// Task: Hit Count
// Link: https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript

function counterEffect(hitCount) {
  const numArr = hitCount.split("").map(Number);
  const result = [];

  for (let i = 0; i < numArr.length; i++) {
    const innerArr = [];
    for (let j = 0; j <= numArr[i]; j++) {
      innerArr.push(j);
    }
    result.push(innerArr);
  }
  return result;
}


