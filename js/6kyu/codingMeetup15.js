// Task: Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
// Link: https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

function findOddNames(list) {
  return list.filter((el) => el.firstName.split("").reduce((sum, el) => sum + el.charCodeAt(0), 0) % 2 !== 0);
}
