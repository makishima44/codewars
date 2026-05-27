// Task: Binary to Text (ASCII) Conversion
// https://www.codewars.com/kata/5583d268479559400d000064/train/javascript

function binaryToString(binary) {
  if (binary.length === 0) return "";

  const chars = [];

  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.slice(i, i + 8);
    const charCode = parseInt(byte, 2);
    const char = String.fromCharCode(charCode);

    chars.push(char);
  }
  return chars.join("");
}
