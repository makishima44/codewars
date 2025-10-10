// Task: Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
// Link: https://www.codewars.com/kata/57faefc42b531482d5000123/train/javascript

function remove(string) {
  const match = string.match(/!+$/);
  const end = match ? match[0] : "";
  return string.replace(/!/g, "") + end;
}
