// Task: Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
// Link: https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript

function allContinents(list) {
  const continents = [...new Set(list.map((dev) => dev.continent))];
  return continents.length === 5 ? true : false;
}

