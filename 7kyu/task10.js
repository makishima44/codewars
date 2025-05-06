function changeCount(change) {
  const changeTypes = {
    penny: 0.01,
    nickel: 0.05,
    dime: 0.1,
    quarter: 0.25,
    dollar: 1.0,
  };
  const changeArr = change.split(" ");
  let result = 0;

  for (const type of changeArr) {
    result += changeTypes[type];
  }

  return "$" + result.toFixed(2);
}
