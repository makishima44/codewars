// Task: Find the unique string
// Link: https://www.codewars.com/kata/585d8c8a28bc7403ea0000c3/train/javascript

function findUniq(arr) {
  const normalize = (s) => [...new Set(s.replace(/\s/g, "").toLowerCase())].sort().join("");
  const normalized = arr.map(normalize);

  let commonPattern;
  if (normalized[0] === normalized[1] || normalized[0] === normalized[2]) {
    commonPattern = normalized[0];
  } else {
    commonPattern = normalized[1];
  }

  const idx = normalized.findIndex((item) => item !== commonPattern);
  return arr[idx];
}


