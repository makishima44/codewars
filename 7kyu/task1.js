function checkThreeAndTwo(array) {
  let count = {};

  for (let i = 0; i < array.length; i++) {
    if (count[array[i]]) {
      count[array[i]]++;
    } else {
      count[array[i]] = 1;
    }
  }

  let values = Object.values(count);

  return values.includes(3) && values.includes(2) && values.length === 2;
}
