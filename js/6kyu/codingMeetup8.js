// Task: Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// Link: https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

function findSenior(list) {
  const maxAge = Math.max(...list.map((dev) => dev.age));
  return list.filter((dev) => dev.age === maxAge);
}


