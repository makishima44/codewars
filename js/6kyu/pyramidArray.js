// Task: Pyramid Array
// Link: https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(Array(i).fill(1));
  }

  return arr;
}


