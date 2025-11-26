// Task: Binary Zoo
// Link: https://www.codewars.com/kata/5a1d91698ba9145199000141/train/javascript

function countTheAnimals(animals) {
  return Object.values(animals).reduce((sum, el) => sum + parseInt(el, 2), 0);
}
