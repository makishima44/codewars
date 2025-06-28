function trickyDoubles(n) {
  const str = String(n);
  const mid = str.length / 2;
  const part1 = Number(str.slice(0, mid));
  const part2 = Number(str.slice(mid));
  if (part1 === part2) return n;
  else return n * 2;
}


