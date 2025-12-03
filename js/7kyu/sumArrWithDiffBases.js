// Task: Sum Array with different bases
// Link: https://www.codewars.com/kata/5a005f4fba2a14897f000086/train/javascript

function sumItUp(numbersWithBases) {
  return numbersWithBases.reduce((sum, [numStr, base]) => {
    return sum + parseInt(numStr, base);
  }, 0);
}
