// Task: Srot the inner ctonnet in dsnnieedcg oredr
// Link: https://www.codewars.com/kata/5898b4b71d298e51b600014b/train/javascript

function sortTheInnerContent(words) {
  return words
    .split(" ")
    .map((el) => {
      return el.length === 1
        ? el
        : `${el[0]}${el
            .slice(1, el.length - 1)
            .split("")
            .sort()
            .reverse()
            .join("")}${el[el.length - 1]}`;
    })
    .join(" ");
}


