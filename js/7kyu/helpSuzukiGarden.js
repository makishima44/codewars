// Task: Help Suzuki rake his garden!
// Link: https://www.codewars.com/kata/571c1e847beb0a8f8900153d/train/javascript

function rakeGarden(garden) {
  return garden
    .split(" ")
    .map((el) => (el === "gravel" || el === "rock" ? el : "gravel"))
    .join(" ");
}

