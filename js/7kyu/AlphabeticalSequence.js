// Task: Alphabetical Sequence
// Link: https://www.codewars.com/kata/5bd00c99dbc73908bb00057a/train/javascript

function alphaSeq(str) {
  const chars = str.toLowerCase().split("").sort();

  const sequences = chars.map((char) => {
    const position = char.charCodeAt(0) - 96;
    return char.toUpperCase() + char.repeat(position - 1);
  });

  return sequences.join(",");
}

