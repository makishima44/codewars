// Task: reverseIt
// Link: https://www.codewars.com/kata/557a2c136b19113912000010/train/javascript

function reverseIt(data) {
  if (typeof data === "number") {
    return Number(String(data).split("").reverse().join(""));
  } else if (typeof data === "string") {
    return data.split("").reverse().join("");
  } else {
    return data;
  }
}
