function mygcd(x, y) {
  while (y !== 0) {
    let step = y;
    y = x % y;
    x = step;
  }
  return x;
}

