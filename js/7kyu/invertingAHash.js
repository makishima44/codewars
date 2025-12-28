// Task: Inverting a Hash
// Link: https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript

function invertHash(hash) {
  return Object.fromEntries(Object.entries(hash).map(([key, value]) => [value, key]));
}
