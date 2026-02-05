// Task: Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
// Link: http://codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript

function sortByLanguage(list) {
  return list.sort((a, b) => {
    if (a.language === b.language) {
      return a.firstName.localeCompare(b.firstName);
    } else {
      return a.language.localeCompare(b.language);
    }
  });
}

var answer1 = [
  { firstName: "Maria", lastName: "S.", country: "Peru", continent: "Americas", age: 30, language: "C" },
  { firstName: "Agustin", lastName: "V.", country: "Uruguay", continent: "Americas", age: 19, language: "JavaScript" },
  { firstName: "Precious", lastName: "G.", country: "South Africa", continent: "Africa", age: 22, language: "JavaScript" },
  { firstName: "Nikau", lastName: "R.", country: "New Zealand", continent: "Oceania", age: 39, language: "Ruby" },
];

console.log(sortByLanguage(answer1));
