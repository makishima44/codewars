// Task: Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
// Link: https://www.codewars.com/kata/5829ca646d02cd1a65000284/train/javascript

function isAgeDiverse(list) {
  const roundedAges = list.map((el) => Math.min(Math.floor(el.age / 10) * 10, 100)).filter((age) => age >= 10);
  const unique = [...new Set(roundedAges)];

  return unique.length >= 10 ? true : false;
}
