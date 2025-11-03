// Task: Do you speak retsec?
// Link: https://www.codewars.com/kata/5516ab668915478845000780/train/javascript

function reverseByCenter(s) {
  const middle = Math.ceil(s.length / 2);

  if (s.length % 2 === 0) {
    return `${s.slice(middle, s.length)}${s.slice(0, middle)}`;
  } else {
    return `${s.slice(middle, s.length)}${s[middle - 1]}${s.slice(0, middle - 1)}`;
  }
}
