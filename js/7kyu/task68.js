function alienLanguage(str) {
  let arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    arr[i] = word.slice(0, -1).toUpperCase() + word.slice(-1).toLowerCase();
  }

  return arr.join(" ");
}
