function getAges(sum, difference) {
  if (sum < 0) return null;
  if (difference < 0) return null;
  if (sum < difference) return null;

  const x = (sum - difference) / 2;
  const y = x + difference;

  return [y, x];
}
