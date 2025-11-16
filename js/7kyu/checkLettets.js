// Task: noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
// Link: https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript

function letterCheck(arr) {
  const normalizedArr = arr.map((el) => el.toLowerCase().replaceAll(" ", ""));
  let check = true;

  for (let i = 0; i < normalizedArr[1].length; i++) {
    if (!normalizedArr[0].includes([normalizedArr[1][i]])) {
      check = false;
    }
  }

  return check;
}
