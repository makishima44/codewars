function consonantCount(str) {
  const countConsonant = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
  return countConsonant ? countConsonant.length : 0;
}
