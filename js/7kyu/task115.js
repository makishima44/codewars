function evenOrOdd(str) {
  let arr = str.split("").map(Number);
  let even = 0;
  let odd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd += arr[i];
    } else {
      even += arr[i];
    }
  }

  if (even === odd) return "Even and Odd are the same";
  return even > odd ? "Even is greater than Odd" : "Odd is greater than Even";
}
