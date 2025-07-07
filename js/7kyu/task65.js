function tailSwap(arr) {
  const [first, second] = arr;

  let part1 = first.slice(0, first.indexOf(":"));
  let part2 = second.slice(second.indexOf(":"));

  let part3 = second.slice(0, second.indexOf(":"));
  let part4 = first.slice(first.indexOf(":"));

  return [part1 + part2, part3 + part4];
}
