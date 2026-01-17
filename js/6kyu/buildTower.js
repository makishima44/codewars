// Task: Build Tower
// Link: https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

function towerBuilder(nFloors) {
  const towerArr = [];
  let count = 1;

  for (let i = nFloors - 1; i >= 0; i--) {
    let str = `${" ".repeat(i)}${"*".repeat(count)}${" ".repeat(i)}`;
    towerArr.push(str);
    count += 2;
  }

  return towerArr;
}
