function countMe(data) {
  if (!/^\d*$/.test(data)) return "";

  const arr = data.split("");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    let count = 1;

    while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
      count++;
      i++;
    }

    result += `${count}${arr[i]}`;
  }

  return result;
}

