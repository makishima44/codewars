// Task: Simple Encryption #1 - Alternating Split
// Link: https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

function encrypt(text, n) {
  if (!text || n <= 0) return text;

  let result = text.split("");

  for (let i = 0; i < n; i++) {
    let odd = result.filter((_, idx) => idx % 2 !== 0);
    let even = result.filter((_, idx) => idx % 2 === 0);
    result = [...odd, ...even];
  }

  return result.join("");
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;

  let result = encryptedText.split("");
  const length = result.length;

  for (let i = 0; i < n; i++) {
    const mid = Math.floor(length / 2);
    const firstHalf = result.slice(0, mid);
    const secondHalf = result.slice(mid);

    const temp = [];
    for (let j = 0; j < mid; j++) {
      temp.push(secondHalf[j], firstHalf[j]);
    }

    if (length % 2 !== 0) {
      temp.push(secondHalf[mid]);
    }

    result = temp;
  }
  return result.join("");
}
