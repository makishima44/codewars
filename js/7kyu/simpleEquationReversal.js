// Task: Simple equation reversal
// Link: https://www.codewars.com/kata/5aa3af22ba1bb5209f000037/train/javascript

function solve(eq) {
  return eq
    .match(/(\d+|[a-zA-Z]+|[-+*/])/g)
    .reverse("")
    .join("");
}
