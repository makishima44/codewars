// Task: Noisy Cell Counts
// Link: https://www.codewars.com/kata/63ebadc7879f2500315fa07e/train/javascript

function cleanedCounts(data) {
  const result = [data[0]];

  for (let i = 1; i < data.length; i++) {
    if (data[i] < result[result.length - 1]) {
      result.push(result[result.length - 1]);
    } else {
      result.push(data[i]);
    }
  }

  return result;
}

