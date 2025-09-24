// Task: Scrolling Text
// Link: https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript

function scrollingText(text) {
  const rotations = [];

  for (let i = 0; i <= text.length - 1; i++) {
    let rotation = "";
    for (let j = 0; j < text.length; j++) {
      rotation += text[(j + i) % text.length];
    }
    rotations.push(rotation.toUpperCase());
  }
  return rotations;
}


