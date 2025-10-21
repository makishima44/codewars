// Task: Array Array Array
// Link: https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript

function explode(x) {
  const [a, b] = x;

  if (typeof a === "number" && typeof b === "number") {
    const total = a + b;
    return Array(total).fill(x);
  } else if (typeof a === "number" && typeof b === "string") {
    return Array(a).fill(x);
  } else if (typeof a === "string" && typeof b === "number") {
    return Array(b).fill(x);
  } else {
    return "Void!";
  }
}
