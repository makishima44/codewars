function toFreud(string) {
  if (!string) return "";

  return string
    .split(" ")
    .map(() => "sex")
    .join(" ");
}
