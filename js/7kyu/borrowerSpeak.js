// Task: Borrower Speak
// Link: https://www.codewars.com/kata/57d2ba8095497e484e00002e/train/javascript

function borrow(s) {
  return s.replace(/[^a-zA-Z]/g, "").toLowerCase("");
}
