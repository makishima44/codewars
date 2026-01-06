// Task: Sentences should start with capital letters.
// Link: https://www.codewars.com/kata/5bf774a81505a7413400006a/train/javascript

function fix(paragraph) {
  const sentencesArr = paragraph.split(". ");
  return sentencesArr
    .filter((sentence) => sentence.trim() !== "")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(". ");
}
