// Task: Battle of the characters (Medium)
// Link: https://www.codewars.com/kata/595e9f258b763bc2d2000032/train/javascript

function battle(x, y) {
  const charCodeArrX = x.split("").map((el) => {
    const baseValue = el.toUpperCase().charCodeAt(0) - 64;
    return el === el.toUpperCase() ? baseValue : baseValue / 2;
  });

  const charCodeArrY = y.split("").map((el) => {
    const baseValue = el.toUpperCase().charCodeAt(0) - 64;
    return el === el.toUpperCase() ? baseValue : baseValue / 2;
  });

  const scoreX = charCodeArrX.reduce((sum, char) => sum + char, 0);
  const scoreY = charCodeArrY.reduce((sum, char) => sum + char, 0);

  if (scoreX === scoreY) return "Tie!";
  return scoreX > scoreY ? x : y;
}
