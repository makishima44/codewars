function validateBase(num, base) {
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < num.length; i++) {
    if (digits.indexOf(num[i]) >= base) return false;
  }

  return true;
}
