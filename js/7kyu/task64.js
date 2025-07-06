function getSumOfDigits(integer) {
  var sum = 0;
  var digits = integer.toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += Number(digits[ix]);
  }
  return sum;
}
