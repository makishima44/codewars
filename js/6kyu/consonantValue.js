// Task: Consonant value
// Link: https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript

function solve(s) {
  const groups = [];
  const vowels = ["a", "e", "i", "o", "u"];

  let currentGroup = "";

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (currentGroup.length > 0) {
        groups.push(currentGroup);
        currentGroup = "";
      }
    } else {
      currentGroup += s[i];
    }
  }

  if (currentGroup.length > 0) {
    groups.push(currentGroup);
  }

  const results = groups.map((group) => group.split("").reduce((sum, el) => sum + (el.charCodeAt(0) - 96), 0));
  return Math.max(...results);
}
