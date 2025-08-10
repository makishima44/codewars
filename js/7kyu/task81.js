function doubleton(num) {
  let n = num + 1;

  while (true) {
    let unique = new Set(n.toString());

    if (unique.size === 2) {
      return n;
    }
    n++;
  }
}
