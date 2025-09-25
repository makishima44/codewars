// Task: Hells Kitchen
// Link: https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript

function gordon(a) {
  return a
    .toUpperCase()
    .replace(/A/g, "@")
    .replace(/[EIOU]/g, "*")
    .split(" ")
    .map((word) => word + "!!!!")
    .join(" ");
}
