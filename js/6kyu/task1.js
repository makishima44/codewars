function meeting(x, need) {
  if (need === 0) return "Game On";

  let result = [];
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    if (count < need) {
      const taken = x[i][0].length;
      const total = x[i][1];

      const free = Math.max(total - taken, 0);
      const take = Math.min(free, need - count);

      result.push(take);
      count += take;
    }
  }
  return count >= need ? result : "Not enough!";
}
