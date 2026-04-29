// Task: Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?
// Link: https://www.codewars.com/kata/57fb44a12b53146fe1000136/train/javascript

function balance(left, right) {
  const obj = {
    "?": 3,
    "!": 2,
  };

  const length = left.length > right.length ? left.length : right.length;

  let leftScore = 0;
  let rightScore = 0;

  for (let i = 0; i < length; i++) {
    if (left[i]) {
      leftScore += obj[left[i]];
    }

    if (right[i]) {
      rightScore += obj[right[i]];
    }
  }

  if (leftScore === rightScore) return "Balance";
  return leftScore > rightScore ? "Left" : "Right";
  return rightScore;
}

