// Task: Battle of the characters (Easy)
// Link: https://www.codewars.com/kata/595519279be6c575b5000016/train/javascript

function battle(x, y) {
  const charCodeArrX = x.split("").map((el) => el.charCodeAt(0) - 64);
  const charCodeArrY = y.split("").map((el) => el.charCodeAt(0) - 64);

  const scoreX = charCodeArrX.reduce((sum, char) => sum + char, 0);
  const scoreY = charCodeArrY.reduce((sum, char) => sum + char, 0);

  if (scoreX === scoreY) return "Tie!";
  return scoreX > scoreY ? x : y;
}
