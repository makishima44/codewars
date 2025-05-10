function remove(str, what) {
  let result = str;

  for (const char in what) {
    let count = what[char];

    for (let i = 0; i < count; i++) {
      result = result.replace(char, "");
    }
  }

  return result;
}
