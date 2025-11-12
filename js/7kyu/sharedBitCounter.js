// Task: Shared Bit Counter
// Link: https://www.codewars.com/kata/58a5aeb893b79949eb0000f1/train/javascript

function sharedBits(a, b) {
  const binaryA = a.toString(2);
  const binaryB = b.toString(2);

  const commonBits = a & b;

  let count = 0;
  let temp = commonBits;

  while (temp > 0) {
    count += temp & 1;
    temp >>= 1;
  }

  return count >= 2;
}


