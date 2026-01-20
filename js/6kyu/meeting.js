// Task: Meeting
// Link: https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript

function meeting(s) {
  const friends = s.split(";");

  const formattedFriends = friends.map((friend) => {
    const [firstName, lastName] = friend.toUpperCase().split(":");
    return [lastName, firstName];
  });

  const sortedFriends = formattedFriends.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].localeCompare(b[1]);
    } else {
      return a[0].localeCompare(b[0]);
    }
  });

  return sortedFriends.map((el) => `(${el.join(", ")})`).join("");
}
