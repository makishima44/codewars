function stantonMeasure(a) {
  let n = a.filter((x) => x === 1).length;
  return a.filter((x) => x === n).length;
}
