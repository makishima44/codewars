function nicknameGenerator(name) {
  const vowel = "aeiou";
  if (name.length <= 3) return "Error: Name too short";
  if (vowel.includes(name[2])) return name.slice(0, 4);
  else return name.slice(0, 3);
}
