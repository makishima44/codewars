// Task: Kooka-Counter
// Link: https://www.codewars.com/kata/58e8cad9fd89ea0c6c000258/train/javascript

var kookaCounter = function (laughing) {
  if (laughing.length === 0) return 0;

  const arr = laughing.match(/../g);
  let count = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }

  return count;
};


