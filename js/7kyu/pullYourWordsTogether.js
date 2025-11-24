// Task: Pull your words together, man!
// Link: https://www.codewars.com/kata/59ad7d2e07157af687000070/train/javascript

function sentencify(words) {
  const str = words.join(" ");
  return `${str[0].toUpperCase()}${str.slice(1)}.`;
}
