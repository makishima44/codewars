// Task: How many pages in a book?
// Link: https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript

function amountOfPages(summary) {
  let counter = 1;
  let string = "";

  while (string.length < summary) {
    string += counter;
    counter++;
  }

  return counter - 1;
}



