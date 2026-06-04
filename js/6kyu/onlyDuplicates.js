// Task: Only Duplicates
// https://www.codewars.com/kata/5a1dc4baffe75f270200006b/train/javascript

function onlyDuplicates(str) {
  const arr = str.split("");
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) {
      result += arr[i];
    }
  }

  return result;
}


