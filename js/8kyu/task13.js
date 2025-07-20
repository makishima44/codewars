function cutIt(arr) {
  let shortest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }

  return arr.map((el) => el.slice(0, shortest.length));
}
