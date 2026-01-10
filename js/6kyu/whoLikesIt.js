// Task: Who likes it?
// Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
  const length = names.length;
  let result = "";

  switch (length) {
    case 0:
      result = "no one likes this";
      break;
    case 1:
      result = `${names[0]} likes this`;
      break;
    case 2:
      result = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      result = `${names[0]}, ${names[1]} and ${length - 2} others like this`;
  }

  return result;
}
