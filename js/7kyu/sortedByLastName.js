// Task: All Star Code Challenge #16
// Link: https://www.codewars.com/kata/586566b773bd9cbe2b000013/train/javascript

function sortReindeer(reindeerNames) {
  return reindeerNames
    .map((el) => el.split(" "))
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map((el) => el.join(" "));
}
