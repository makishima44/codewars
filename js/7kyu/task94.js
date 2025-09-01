var paintLetterboxes = function (start, end) {
  const obj = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  const arr = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  const str = arr.map(String).join("");

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  return Object.values(obj).map(Number);
};
