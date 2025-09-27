// Task: Javascript filter - 1
// Link: https://www.codewars.com/kata/525d9b1a037b7a9da7000905/train/javascript

function searchNames(logins) {
  return logins.filter((login) => login[0].endsWith("_"));
}
