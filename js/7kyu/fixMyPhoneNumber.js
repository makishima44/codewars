// Task: Fix My Phone Numbers!
// Link: https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript

function isItANum(str) {
  const phoneNumber = str.replace(/\D+/g, "");
  return phoneNumber.length === 11 && phoneNumber.startsWith("0") ? phoneNumber : "Not a phone number";
}
