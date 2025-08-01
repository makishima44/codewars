function broken(x) {
  let str = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "1") str += "0";
    if (x[i] === "0") str += "1";
  }

  return str;
}
