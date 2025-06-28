function password(str) {
  let validate = {
    upperCase: 0,
    lowerCase: 0,
    number: 0,
  };

  if (str.length < 8) return false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (/[A-Z]/.test(char)) {
      validate.upperCase++;
    } else if (/[a-z]/.test(char)) {
      validate.lowerCase++;
    } else if (/[0-9]/.test(char)) {
      validate.number++;
    }
  }

  return Object.values(validate).every((count) => count >= 1);
}
