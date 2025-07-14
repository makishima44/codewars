export const numberJoy = (n: number): boolean => {
  const sum: number = n
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, el) => sum + el, 0);

  const reversing = Number(sum.toString().split("").reverse().join(""));

  return sum * reversing === n ? true : false;
};
