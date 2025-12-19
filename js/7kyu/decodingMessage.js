// Task: Decoding a message
// Link: https://www.codewars.com/kata/565b9d6f8139573819000056/train/javascript

function decode(message) {
  let result = "";

  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      result += " ";
    } else {
      let letterPosition = message[i].charCodeAt(0) - 97;
      let reversLetter = String.fromCharCode(122 - letterPosition);
      result += reversLetter;
    }
  }

  return result;
}
