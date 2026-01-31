// Task: Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
// Link: https://www.codewars.com/kata/58381907f8ac48ae070000de/train/javascript

function isLanguageDiverse(list) {
  const languages = list.map((el) => el.language);
  const languageCounts = {};

  for (const language of languages) {
    if (languageCounts[language]) {
      languageCounts[language] += 1;
    } else {
      languageCounts[language] = 1;
    }
  }

  const counts = Object.values(languageCounts);

  return Math.max(...counts) / 2 > Math.min(...counts) ? false : true;
}
