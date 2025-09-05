function remove(string) {
  return string
    .split(" ")
    .filter((el) => el.split("!").length - 1 !== 1)
    .join(" ");
}

console.log(remove("Hi! Hi!! Hi!"));
