// Task: Simple Fun #67: Array Change
// Link: https://www.codewars.com/kata/5893f43b779ce54da4000124/train/javascript

function arrayChange(arr) {
  let moves = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      let needed = arr[i - 1] + 1 - arr[i];
      arr[i] += needed;
      moves += needed;
    }
  }

  return moves;
}


