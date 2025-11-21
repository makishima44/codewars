// Task: Binary to string
// Link: https://www.codewars.com/kata/5ab3495595df9ec78f0000b4/train/javascript

function binaryToString(binary) {
  const arr = binary.split("0b").filter((item) => item !== "");

  return arr
    .map((el) => {
      return String.fromCharCode(parseInt(el, 2));
    })
    .join("");
}
