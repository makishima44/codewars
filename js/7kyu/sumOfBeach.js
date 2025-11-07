// Task: Sum of a Beach
// Link: https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript

function sumOfABeach(beach) {
  const matches = beach.match(/(Sand|Water|Fish|Sun)/gi);
  return matches ? matches.length : 0;
}
