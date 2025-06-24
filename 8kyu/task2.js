function uniTotal(string) {
  return string
    .split("")
    .map((el) => el.charCodeAt())
    .reduce((sum, el) => sum + el, 0);
}


