// Task: Odd Ones Out!
// Link: https://www.codewars.com/kata/5d376cdc9bcee7001fcb84c0/train/javascript

function oddOnesOut(nums) {
  const count = nums.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});

  return nums.filter((el) => count[el] % 2 === 0);
}
