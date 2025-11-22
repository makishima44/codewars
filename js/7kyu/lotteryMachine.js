// Task: Lottery machine
// Link: https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript

function lottery(str) {
  const digits = str.match(/\d/g);

  if (!digits) return "One more run!";
  return [...new Set(digits)].join("");
}
