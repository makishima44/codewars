function getAverageAge(list) {
  let ages = 0;

  for (const person of list) {
    ages += person.age;
  }

  return Math.round(ages / list.length);
}
