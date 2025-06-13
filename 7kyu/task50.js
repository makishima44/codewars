function bandNameGenerator(str) {
  if (str[0] !== str[str.length - 1]) return "The " + str[0].toUpperCase() + str.slice(1);
  else return str[0].toUpperCase() + str.slice(1) + str.slice(1);
}
