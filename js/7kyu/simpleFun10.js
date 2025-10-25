// Task: Simple Fun #10: Range Bit Counting
// Link: https://www.codewars.com/kata/58845748bd5733f1b300001f/train/javascript

function rangeBitCount(a, b) {
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  const binaryArr = arr.map((el) => el.toString(2));
  return binaryArr.join("").match(/1/g).length;
}
