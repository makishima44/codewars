// Task: Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
// Link: https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript

function findSenior(list) {
  const maxAge = Math.max(...list.map((dev) => dev.age));
  return list.filter((dev) => dev.age === maxAge);
}
