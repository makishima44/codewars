// Task: Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
// Link: https://www.codewars.com/kata/583d972b8bbc0402cf000121/train/javascript

function askForMissingDetails(list) {
  const result = [];

  list.forEach((el, index) => {
    for (const key in el) {
      if (el[key] === null) {
        result.push({ ...el, question: `Hi, could you please provide your ${key}.` });
      }
    }
  });

  return result;
}
