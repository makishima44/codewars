// Task: Coding Meetup #10 - Higher-Order Functions Series - Create usernames
// Link: https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function addUsername(list) {
  const date = new Date().getFullYear();

  return list.map((dev) => ({
    ...dev,
    username: `${dev.firstName.toLowerCase()}${dev.lastName[0].toLowerCase()}${date - dev.age}`,
  }));
}


