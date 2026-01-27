// Task: The Deaf Rats of Hamelin
// Link: https://www.codewars.com/kata/598106cb34e205e074000031/train/javascript

var countDeafRats = function (town) {
  const matches = town.match(/P|O~|~O/g);
  const piedPiper = matches.findIndex((el) => el === "P");

  const leftSide = matches.slice(0, piedPiper);
  const rightSide = matches.slice(piedPiper + 1);

  const filteredLeftSide = leftSide.filter((el) => el !== "~O");
  const filteredRightSide = rightSide.filter((el) => el !== "O~");

  return filteredLeftSide.length + filteredRightSide.length;
};
