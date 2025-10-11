// Task: Find the missing element between two arrays
// Link: https://www.codewars.com/kata/5a5915b8d39ec5aa18000030/train/javascript

function findMissing(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el = arr2.indexOf(arr1[i]);
    if (el !== -1) {
      arr2.splice(el, 1);
    } else {
      return arr1[i];
    }
  }
}

