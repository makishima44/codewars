// Task: String transformer
// Link: https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

function stringTransformer(str) {
  return str
    .split(/(\s+)/)
    .reverse()
    .map((part) => (/^\s+$/.test(part) ? part : part.replace(/./g, (c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))))
    .join("");
}

