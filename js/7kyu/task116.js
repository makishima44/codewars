function covfefe(str) {
  const arr = str.split(" ");

  return arr.includes("coverage")
    ? arr.map((el) => (el === "coverage" ? "covfefe" : el)).join(" ")
    : `${str} ${"covfefe"}`;
}
