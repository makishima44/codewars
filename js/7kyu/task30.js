function houseNumbersSum(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] !== 0) {
      count += inputArray[i];
    } else {
      break;
    }
  }

  return count;
}
