function infiniteLoop(arr, d, n) {
  const length = arr.map((sub) => sub.length);
  let flat = arr.reduce((acc, sub) => acc.concat(sub), []);

  for (let i = 0; i < n; i++) {
    if (d === "left") flat.push(flat.shift());
    if (d === "right") flat.unshift(flat.pop());
  }

  const result = [];
  let index = 0;

  for (let len of length) {
    result.push(flat.slice(index, index + len));
    index += len;
  }
  return result;
}
